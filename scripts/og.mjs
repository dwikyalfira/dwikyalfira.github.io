// Generates public/og.png (1200x630), the image shown when the site is shared
// on WhatsApp, LinkedIn, X, etc.  Run:  node scripts/og.mjs
//
// Uses the site's own font (DM Serif Display from @fontsource). Pango needs a TTF/OTF,
// so the .woff files are unpacked to .ttf in a temp folder first.
import { readFileSync, writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { inflateSync } from 'node:zlib';
import sharp from 'sharp';

const W = 1200, H = 630;
const fontDir = 'node_modules/@fontsource/dm-serif-display/files';

/** WOFF 1.0 -> TTF (sfnt) */
function woffToTtf(buf) {
  const numTables = buf.readUInt16BE(12);
  const flavor = buf.readUInt32BE(4);
  const tables = [];
  for (let i = 0; i < numTables; i++) {
    const o = 44 + i * 20;
    tables.push({
      tag: buf.readUInt32BE(o), offset: buf.readUInt32BE(o + 4), compLength: buf.readUInt32BE(o + 8),
      origLength: buf.readUInt32BE(o + 12), checksum: buf.readUInt32BE(o + 16),
    });
  }
  let searchRange = 1, entrySelector = 0;
  while (searchRange * 2 <= numTables) { searchRange *= 2; entrySelector++; }
  searchRange *= 16;
  const header = Buffer.alloc(12 + numTables * 16);
  header.writeUInt32BE(flavor, 0);
  header.writeUInt16BE(numTables, 4);
  header.writeUInt16BE(searchRange, 6);
  header.writeUInt16BE(entrySelector, 8);
  header.writeUInt16BE(numTables * 16 - searchRange, 10);
  const datas = [];
  let offset = header.length;
  tables.forEach((t, i) => {
    const raw = buf.subarray(t.offset, t.offset + t.compLength);
    const data = t.compLength < t.origLength ? inflateSync(raw) : Buffer.from(raw);
    const padded = Buffer.alloc((data.length + 3) & ~3);
    data.copy(padded);
    const o = 12 + i * 16;
    header.writeUInt32BE(t.tag, o);
    header.writeUInt32BE(t.checksum, o + 4);
    header.writeUInt32BE(offset, o + 8);
    header.writeUInt32BE(t.origLength, o + 12);
    datas.push(padded);
    offset += padded.length;
  });
  return Buffer.concat([header, ...datas]);
}

const tmp = mkdtempSync(join(tmpdir(), 'og-'));
const serif = join(tmp, 'DMSerifDisplay-Regular.ttf');
const serifItalic = join(tmp, 'DMSerifDisplay-Italic.ttf');
writeFileSync(serif, woffToTtf(readFileSync(`${fontDir}/dm-serif-display-latin-400-normal.woff`)));
writeFileSync(serifItalic, woffToTtf(readFileSync(`${fontDir}/dm-serif-display-latin-400-italic.woff`)));

// background: cream page, soft orb bottom-right, small logo mark top-left
const bg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <radialGradient id="orb" cx="50%" cy="50%" r="50%">
      <stop offset="0" stop-color="#ff3d7f"/>
      <stop offset=".24" stop-color="#f5b8c4"/>
      <stop offset=".42" stop-color="#f3efd0"/>
      <stop offset=".62" stop-color="#1f4fb4" stop-opacity=".35"/>
      <stop offset="1" stop-color="#1f4fb4" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="logo" cx="75%" cy="85%" r="113%" fx="75%" fy="85%">
      <stop offset="0" stop-color="#ff3d7f"/><stop offset=".40" stop-color="#f3efd0"/><stop offset=".78" stop-color="#1f4fb4"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="#f6f4ef"/>
  <circle cx="1060" cy="600" r="430" fill="url(#orb)"/>
  <g transform="translate(80 72)">
    <rect width="64" height="64" rx="18" fill="url(#logo)"/>
    <circle cx="32" cy="32" r="21" fill="none" stroke="#e0302b" stroke-width="5"/>
  </g>
  <rect x="80" y="${H - 84}" width="1040" height="1" fill="#0f1a33" fill-opacity=".12"/>
</svg>`;

const text = (t, font, fontfile, opts = {}) =>
  sharp({ text: { text: t, font, fontfile, rgba: true, dpi: 72, ...opts } }).png().toBuffer();

const name = await text(
  `<span foreground="#0f1a33">Muhammad Dwiky Alfira</span>`, 'DM Serif Display 92', serif,
);
const role = await text(
  `<span foreground="#1f4fb4">Software engineer.</span>`, 'DM Serif Display Italic 60', serifItalic,
);
const url = await text(
  `<span foreground="#5a6378">dwikyalfira.github.io</span>`, 'DM Serif Display 30', serif,
);

await sharp(Buffer.from(bg))
  .composite([
    { input: name, left: 80, top: 230 },
    { input: role, left: 82, top: 345 },
    { input: url, left: 80, top: H - 66 },
  ])
  .png({ compressionLevel: 9 })
  .toFile('public/og.png');

console.log('wrote public/og.png');
