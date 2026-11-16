# HPP-Ku

Kalkulator HPP minuman berbasis Next.js fullstack. Data resep disimpan di Supabase melalui Route Handler Next.js; UI menggunakan DaisyUI dengan tema warna yang dipakai aplikasi.

## Menjalankan

```bash
npm install
cp .env.local.example .env.local
# isi NEXT_PUBLIC_SUPABASE_URL dan SUPABASE_SERVICE_ROLE_KEY
npm run dev
```

Buka `http://localhost:3000`.

## Supabase

1. Buka SQL Editor project Supabase.
2. Jalankan [`supabase/schema.sql`](./supabase/schema.sql).
3. Isi `.env.local` menggunakan URL project dan service role secret key. Key ini hanya dibaca server Route Handler dan tidak pernah dikirim ke browser.

Jalankan file SQL tersebut sekali agar tabel auth resmi tersedia. Saat tabel belum tersedia, aplikasi memakai bootstrap auth di tabel `recipes` sehingga login tetap dapat digunakan.

Untuk bootstrap otomatis jika tabel auth belum ada, isi `APP_LOGIN_USERNAME` dan `APP_LOGIN_PASSWORD` di environment server. Nilai ini hanya dipakai sekali untuk membuat hash akun di database; password tidak disimpan mentah.

Login memakai satu akun aplikasi yang disimpan di tabel `app_users`; sesi disimpan di `app_sessions` tanpa `expires_at` dan tetap aktif sampai logout. Resep dikelompokkan berdasarkan cookie workspace. Data resep, sesi, dan tema tidak memakai localStorage.

## Fitur

- Menyimpan, membuka, dan menghapus resep melalui Supabase.
- Resep baru dimulai kosong; tidak ada seed resep bawaan.
- Jumlah cup default 1; bahan, kemasan, dan operasional dikalikan sesuai produksi.
- Resep tersimpan dapat dipakai sebagai komponen base di resep lain; pemakaian base diatur per cup.
- Salinan resep merinci bahan dari resep base yang dipakai, termasuk resep bertingkat.
- HPP dan harga jual selalu ditampilkan per cup, dengan ringkasan biaya, penjualan, dan laba total produksi.
- Salin tabel HPP ke spreadsheet dan ekspor seluruh resep tersimpan ke file Excel dengan satu sheet per kategori.
