# 🐱 Portofolio Kayla Mahira Putri - Siap Deploy di Vercel

Website portofolio pribadi modern untuk **Kayla Mahira Putri**, pelajar di **SMK Telkom Malang** (Kelas 10 - Jurusan Teknik Komputer dan Jaringan / TKJ).

Website ini dirancang khusus dengan estetika warna **kuning soft (pastel butter & warm cream)**, ornamen ilustrasi **kucing lucu**, gaya bahasa **semi formal**, foto profil asli di halaman utama dan profil, serta sudah dikonfigurasi **100% siap langsung di-deploy ke Vercel**.

---

## ✨ Fitur Halaman Sesuai Kebutuhan

1. **Halaman Utama (`index.html`)**:
   - Foto profil asli Kayla dengan bingkai bertelinga kucing (*cat ears*).
   - Nama lengkap: **Kayla Mahira Putri**.
   - Tulisan identitas: **Pelajar SMK Telkom Malang**.
   - Sapaan semi-formal, tombol aksi cepat, dan balon sapaan maskot kucing.

2. **Halaman Profil (`profil.html`)**:
   - Menampilkan foto profil Kayla di kartu identitas sisi kiri.
   - **Tingkat & Sekolah**: Pelajar aktif di SMK Telkom Malang, Kelas 10.
   - **Jurusan**: Teknik Komputer dan Jaringan (TKJ).
   - **Ekstrakurikuler**: Robotik (lengkap dengan kartu info dan ilustrasi *Robot Cat*).
   - **Hobi**: Menggambar & Mendengarkan Musik (lengkap dengan ilustrasi kreatif dan galeri sketsa).

3. **Halaman Kontak (`kontak.html`)**:
   - Akun Instagram resmi: **[@straarr_](https://instagram.com/straarr_)** dengan tombol akses cepat.
   - **Privasi Terlindungi**: Sesuai instruksi, nomor HP/WA, alamat tempat tinggal, dan email **tidak dicantumkan**.

4. **Halaman 404 Kustom (`404.html`)**:
   - Tampilan ramah bertema kucing jika ada tautan yang salah ketik.

---

## 🚀 Panduan Upload / Deploy ke Vercel

Website ini adalah website statis murni yang sangat cepat, ringan, dan zero-config di Vercel. Anda dapat memilih salah satu dari 2 cara termudah di bawah ini:

### 🌟 Cara 1: Menggunakan GitHub + Vercel (Paling Direkomendasikan & Otomatis)

1. **Buat Repositori Baru di GitHub**:
   - Buka [github.com](https://github.com) dan login ke akun Anda.
   - Buat repositori baru, misalnya beri nama `kayla-portfolio`.
2. **Push File ke GitHub**:
   Buka terminal di folder proyek (`C:\Users\User\.gemini\antigravity\scratch\kayla-portfolio`) dan jalankan:
   ```bash
   git init
   git add .
   git commit -m "Deploy portofolio Kayla Mahira Putri"
   git branch -M main
   git remote add origin https://github.com/USERNAME-ANDA/kayla-portfolio.git
   git push -u origin main
   ```
3. **Hubungkan ke Vercel**:
   - Buka [vercel.com](https://vercel.com) dan login (bisa login langsung dengan akun GitHub).
   - Klik tombol **"Add New..."** -> pilih **"Project"**.
   - Pilih repositori `kayla-portfolio` yang baru saja Anda buat di GitHub.
   - Pada pengaturan *Framework Preset*, biarkan default (**Other / Static**).
   - Klik tombol **"Deploy"**.
   - Selesai! Dalam beberapa detik website Anda akan aktif secara online dengan domain gratis seperti `https://kayla-portfolio.vercel.app`.

---

### ⚡ Cara 2: Menggunakan Vercel CLI (Langsung Lewat Terminal)

1. Pastikan Vercel CLI terpasang di komputer:
   ```bash
   npm install -g vercel
   ```
2. Buka terminal di folder proyek ini:
   ```bash
   cd C:\Users\User\.gemini\antigravity\scratch\kayla-portfolio
   ```
3. Jalankan perintah deploy:
   ```bash
   vercel --prod
   ```
4. Ikuti instruksi login di layar. Website Anda akan langsung aktif dan tautan website Vercel akan otomatis muncul di terminal!

---

## 🎨 Konfigurasi Khusus Vercel (`vercel.json`)

File `vercel.json` sudah disiapkan dengan:
- `cleanUrls: true`: Mengizinkan akses URL bersih tanpa ekstensi `.html` (contoh: `/profil` dan `/kontak`).
- Security Headers: `X-Content-Type-Options`, `X-Frame-Options`, dan `X-XSS-Protection`.
- Caching otomatis untuk aset gambar dan ilustrasi.
