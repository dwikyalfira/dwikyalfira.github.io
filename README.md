# Muhammad Dwiky Alfira: Personal Website

Website pribadi dibangun dengan [Astro](https://astro.build) dan di-deploy ke GitHub Pages.

## Menjalankan di komputer

```bash
npm install
npm run dev      # buka http://localhost:4321
npm run build    # hasil build ada di dist/
```

## Mengubah konten

| Yang ingin diubah | File |
| --- | --- |
| Nama, tagline, email, link sosial, bio, skill, pengalaman | `src/data/site.ts` |
| Proyek (tambah / edit) | `src/content/projects/*.md` |
| Screenshot proyek | `src/assets/projects/<nama-proyek>/` |
| Foto galeri | taruh JPG/PNG di `src/assets/gallery/` |
| Keterangan foto galeri (opsional) | `src/data/gallery.ts` |
| Warna & font | `src/styles/global.css` (bagian `:root`) |

**Menambah proyek baru:** salin salah satu file `.md` di `src/content/projects/`, ganti isinya, lalu taruh gambarnya di `src/assets/projects/<slug>/`. Isi `links:` dengan `github`, `live`, atau `figma` agar tombolnya muncul.

**Galeri:** selama `src/assets/gallery/` masih kosong, halaman galeri menampilkan placeholder abstrak. Begitu foto ditambahkan, placeholder otomatis diganti dengan foto asli.

## Deploy ke GitHub Pages

1. Buat repo baru di GitHub.
   - Nama `dwikyalfira.github.io` → web tampil di `https://dwikyalfira.github.io`
   - Nama lain (mis. `portfolio`) → ubah `base: '/portfolio'` di `astro.config.mjs`
2. Sesuaikan `site` di `astro.config.mjs` dengan username GitHub Anda.
3. Push kode:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```
4. Di GitHub: **Settings → Pages → Source: GitHub Actions**. Setiap push ke `main` akan otomatis men-deploy web.

> Folder `_referensi/` (CV dan portofolio asli) sudah di-`.gitignore`, sehingga tidak ikut ter-upload.
