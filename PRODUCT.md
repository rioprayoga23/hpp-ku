# HPP-Ku
<!-- impeccable:product-schema 1 -->
## Platform
web
## Users
Pemilik usaha makanan/minuman, UMKM, booth, dan cafe yang menghitung biaya per porsi serta harga jual.
## Product Purpose
Kalkulator satu halaman untuk biaya bahan minuman, overhead opsional, margin, dan harga jual per cup.
## Stack
Pengguna memilih langsung kode dan melanjutkan HPP-Ku. Implementasi React, Vite, komponen resmi Radix Themes, penyimpanan localStorage, hosting Sites yang sudah ada.
## Capabilities and Constraints
- Input harga Rupiah memakai pemisah ribuan titik. Satuan ml, liter, gram, kilogram, pcs; konversi hanya dalam keluarga satuan yang sama.
- Satu bahan tetap satu baris pada semua perangkat; tabel bisa digeser dan kolom nama menempel.
- Aktif/nonaktif per bahan, menyimpan nilai saat dikeluarkan dari perhitungan.
- Overhead per bulan dibagi target porsi bulanan opsional, atau biaya langsung per cup. Biaya bulanan tanpa target ditandai dan tidak dimasukkan ke HPP.
- Margin saja: preset 25%, 45%, 65%, input manual, harga jual dan estimasi laba.
- HPP dan harga jual tetap tersedia saat operasional kosong; HPP memakai biaya bahan/kemasan yang ada.
- Revisi pengguna: state resep aktif tetap tersimpan otomatis di localStorage. Daftar menu tersimpan dihapus. Salin hanya bahan aktif, beserta overhead dan pengaturan harga; import lewat paste memulihkan salinan lengkap.
- Resep lama dimigrasi tanpa mengubah atau menghapus kunci penyimpanan lama. Kemasan dihitung sekali; kemasan lama tetap pada komponen resep.
## Brand Commitments
Nama HPP-Ku dengan alamat situs yang sama. Bahasa Indonesia, singkat dan fungsional. Identitas visual yang telah ada menjadi titik awal.
## Evidence on Hand
Resep Kopi Brown Sugar dan harga bahan dari pengguna tersimpan di implementasi lama. Tidak ada angka overhead atau target penjualan nyata yang diberikan; operasional dimulai kosong dan target bulanan opsional.
## Product Principles
Hitungan transparan; biaya tidak dihitung ganda; tidak kehilangan resep; peringatan memiliki tindakan perbaikan; hasil adalah estimasi berdasarkan input.
