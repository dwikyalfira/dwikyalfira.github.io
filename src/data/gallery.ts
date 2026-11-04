// Foto galeri: diambil langsung dari akun Pexels (lewat CDN Pexels, tidak disimpan di repo).
// Untuk menambah foto: buka foto di Pexels, salin angka ID dari URL-nya
// (mis. pexels.com/photo/40748182/ -> '40748182'), lalu tambahkan entri di bawah.
// w/h cukup perbandingannya saja (3:2 -> 3, 2; 4:3 -> 4, 3).

export const pexelsProfile = 'https://www.pexels.com/@dwiky-alfira-3834505/';

export type Photo = { id: string; w: number; h: number; title: string; place?: string };

/**
 * Auto mode: if PEXELS_API_KEY and PEXELS_COLLECTION_ID are set at build time
 * (GitHub Actions secret + variable), the gallery is loaded from that Pexels collection.
 * Otherwise (or if the request fails) the manual list below is used.
 */
let cache: Promise<Photo[]> | undefined;
export function getPhotos(): Promise<Photo[]> {
  return (cache ??= loadCollection());
}

async function loadCollection(): Promise<Photo[]> {
  const key = import.meta.env.PEXELS_API_KEY ?? process.env.PEXELS_API_KEY;
  const collection = import.meta.env.PEXELS_COLLECTION_ID ?? process.env.PEXELS_COLLECTION_ID;
  if (!key || !collection) return photos;

  try {
    const out: Photo[] = [];
    let url: string | undefined = `https://api.pexels.com/v1/collections/${collection}?type=photos&per_page=80`;
    while (url && out.length < 400) {
      const res = await fetch(url, { headers: { Authorization: key } });
      if (!res.ok) throw new Error(`Pexels API ${res.status}`);
      const data: { media: { id: number; width: number; height: number; alt?: string }[]; next_page?: string } =
        await res.json();
      for (const m of data.media) {
        const manual = photos.find((p) => p.id === String(m.id));
        out.push(manual ?? { id: String(m.id), w: m.width, h: m.height, title: m.alt?.trim() || 'Photograph' });
      }
      url = data.next_page;
    }
    console.log(`[gallery] Loaded ${out.length} photos from Pexels collection`);
    return out.length ? out : photos;
  } catch (err) {
    console.warn('[gallery] Could not load Pexels collection, using manual list:', err);
    return photos;
  }
}

export const photos: Photo[] = [
  { id: '40748182', w: 3, h: 2, title: 'Sunset over campus' },
  { id: '40748175', w: 3, h: 2, title: 'Contrail over the trees', place: 'Porto, Portugal' },
  { id: '40748171', w: 3, h: 2, title: 'Airplane, blue skies' },
  { id: '40748170', w: 3, h: 2, title: 'City view', place: 'Porto, Portugal' },
  { id: '40748158', w: 3, h: 2, title: 'Sunset over the Douro', place: 'Porto, Portugal' },
  { id: '40748151', w: 3, h: 2, title: 'Metro lights' },
  { id: '40748145', w: 4, h: 3, title: 'Classic tram, old street' },
  { id: '40748137', w: 4, h: 3, title: 'People on the bridge' },
  { id: '40748130', w: 4, h: 3, title: 'The road ahead' },
  { id: '40748119', w: 3, h: 2, title: 'Bus & flag' },
  { id: '40748089', w: 3, h: 2, title: 'Motion, in black & white' },
  { id: '40748076', w: 3, h: 2, title: 'Cloudy day', place: 'Porto, Portugal' },
];

const base = (id: string) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb`;
export const pexelsSrc = (id: string, w: number) => `${base(id)}&w=${w}`;
export const pexelsSrcset = (id: string) => [400, 700, 1000, 1400].map((w) => `${pexelsSrc(id, w)} ${w}w`).join(', ');
export const pexelsPage = (id: string) => `https://www.pexels.com/photo/${id}/`;
