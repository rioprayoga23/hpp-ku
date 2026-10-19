# HPP-Ku: Kalkulator HPP & harga jual

Aplikasi satu halaman berbasis React, Vite, dan Radix Themes. Bahasa Indonesia, mobile/desktop, tema terang/gelap, penyimpanan lokal otomatis.

## Menjalankan

```sh
npm install
npm run dev
npm run build
npm run preview
```

Build produksi terdapat di `dist/`. Konfigurasi Situs yang ada dipertahankan di `.openai/hosting.json`.

## Struktur

- `src/model.js`: model resep, migrasi localStorage, validasi, rumus perhitungan.
- `src/recipeTransfer.js`: format teks Salin resep dan parser Import resep.
- `src/App.jsx`: state, autosave, tema, koordinasi impor dan salin.
- `src/components/`: formulir bahan, overhead, harga, ringkasan, dialog import, kontrol bersama.
- `src/styles.css`: layout responsif dan token tema.

## Perhitungan

- Bahan = harga beli / isi kemasan × pemakaian, dengan konversi satuan yang sejenis.
- Kemasan hanya dihitung sekali melalui jenis komponen Kemasan. Jika diinput sebagai overhead per porsi, jangan masukkan kembali sebagai komponen.
- Operasional per cup = biaya bulanan / target porsi bulanan + biaya langsung per cup. Target bulanan opsional; biaya bulanan belum masuk HPP sebelum target diisi.
- HPP = bahan + kemasan + biaya operasional yang sudah dapat dihitung. Tanpa operasional, HPP dan harga tetap dihitung dari bahan.
- Harga jual = HPP / (1 - target margin). Harga disesuaikan ke rupiah penuh.
- Estimasi laba = harga jual - HPP. Angka ini hanya memakai biaya yang diinput.

Preset margin adalah titik awal simulasi, bukan standar industri. Estimasi tidak memasukkan pajak, diskon, atau biaya yang tidak diinput.

## Penyimpanan dan transfer

State aktif tersimpan di `kopti-workspace-v2`. Kunci lama `kopti-hpp-calculator-v1` hanya dibaca untuk migrasi dan tidak dihapus. Tidak ada pengiriman resep ke server. Bila penyimpanan tidak tersedia/rusak, tampilkan pesan yang jujur tanpa menimpa data rusak.

Salin resep menyertakan **hanya komponen aktif**, data pembelian/takaran, overhead, dan pengaturan harga. Salinan teks lengkap dapat ditempel di Import resep. Parser tidak menjalankan kode, memvalidasi format, dan memperlihatkan ringkasan sebelum mengganti state. Ringkasan biaya dihitung ulang dari data resep.

Simpan teks salinan di luar aplikasi sebagai cadangan. localStorage tidak menyinkronkan antarperangkat dan hilang jika data browser dihapus.

## Catatan pengembangan

Tidak ada test suite yang ditambahkan atau dijalankan. Build produksi dan inspeksi visual dilakukan terpisah dari pengujian otomatis.
