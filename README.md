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

Resep dikelompokkan berdasarkan cookie workspace anonim agar beberapa menu dapat disimpan tanpa login. Data resep dan tema tidak memakai localStorage.

## Fitur

- Menyimpan, membuka, dan menghapus resep melalui Supabase.
- Seed awal Longblack, BerryCano, dan PeachCano hanya sekali per workspace.
- Jumlah cup default 1; bahan, kemasan, dan operasional dikalikan sesuai produksi.
- HPP dan harga jual selalu ditampilkan per cup, dengan ringkasan biaya, penjualan, dan laba total produksi.
- Salin tabel HPP ke spreadsheet dan ekspor seluruh resep tersimpan ke satu file Excel dengan bagian terpisah untuk tiap resep.
