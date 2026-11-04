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
| Foto galeri (dari Pexels) | `src/data/gallery.ts` |
| Warna & font | `src/styles/global.css` (bagian `:root`) |

**Menambah proyek baru:** salin salah satu file `.md` di `src/content/projects/`, ganti isinya, lalu taruh gambarnya di `src/assets/projects/<slug>/`. Isi `links:` dengan `github`, `live`, atau `figma` agar tombolnya muncul.

**Galeri otomatis (koleksi Pexels):** jika repo punya secret `PEXELS_API_KEY` dan variable `PEXELS_COLLECTION_ID` (Settings → Secrets and variables → Actions), galeri diambil dari koleksi Pexels tersebut saat build. Web juga di-build ulang otomatis setiap hari pukul 07:00 WIB, jadi foto yang baru dimasukkan ke koleksi akan muncul paling lambat sehari kemudian. Untuk langsung memperbarui: tab Actions → Deploy to GitHub Pages → Run workflow. Catatan: GitHub menonaktifkan jadwal otomatis jika repo tidak ada aktivitas selama 60 hari; aktifkan lagi dari tab Actions.

**Galeri manual (cadangan):** foto dimuat langsung dari akun Pexels Anda. Untuk menambah foto, salin ID dari URL foto Pexels (mis. `pexels.com/photo/40748182/` → `40748182`), lalu tambahkan satu baris di `photos` pada `src/data/gallery.ts`.

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
