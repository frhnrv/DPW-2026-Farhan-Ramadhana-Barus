## 1. Wireframe

Wireframe digunakan untuk menggambarkan rancangan tampilan halaman sebelum dibuat menjadi website.

### A. Halaman Beranda

```text
+--------------------------------------------------+
|                    SIMPUS-Mini        ☰          |
+--------------------------------------------------+
| Beranda | Daftar Buku | Tambah Buku |             |
| Daftar Anggota | Tambah Anggota                  |
+--------------------------------------------------+

+--------------------------------------------------+
| Selamat Datang di Sistem Perpustakaan Mini       |
| Aplikasi sederhana untuk mengelola data buku     |
| dan anggota perpustakaan.                        |
+--------------------------------------------------+

+--------------------------------------------------+
|                    RINGKASAN                     |
|                                                  |
| +----------------+  +----------------+           |
| |   Total Buku   |  | Total Anggota  |           |
| |       19       |  |       8        |           |
| +----------------+  +----------------+           |
|                                                  |
| +----------------+  +----------------+           |
| | Sedang Dipinjam|  | Buku Terlambat |           |
| |       3        |  |       2        |           |
| +----------------+  +----------------+           |
+--------------------------------------------------+

|             © 2026 SIMPUS-Mini                  |
+--------------------------------------------------+
```

Halaman beranda menampilkan sambutan dan empat kartu ringkasan: Total Buku, Total Anggota, Sedang Dipinjam, dan Buku Terlambat.

### B. Halaman Daftar Buku

```text
+--------------------------------------------------+
|                    SIMPUS-Mini        ☰          |
+--------------------------------------------------+
| Beranda | Daftar Buku | Tambah Buku |             |
| Daftar Anggota | Tambah Anggota                  |
+--------------------------------------------------+

+--------------------------------------------------+
|                 DAFTAR BUKU                     |
+--------------------------------------------------+
| Judul | Pengarang | Tahun | ISBN | Kategori | Aksi|
+--------------------------------------------------+
| Buku 1| Penulis 1 | 2025  | ...  | Fiksi    | Edit|
| Buku 2| Penulis 2 | 2024  | ...  | Referensi| Hapus|
+--------------------------------------------------+

+--------------------------------------------------+
|             © 2026 SIMPUS-Mini                  |
+--------------------------------------------------+
```

**Catatan:** Pada kode yang diberikan, halaman `buku/list.html` justru masih berisi struktur data anggota, seperti No. Anggota, Nama, Alamat, dan No. HP. Jadi wireframe di atas menggambarkan **fungsi yang seharusnya bernama Daftar Buku**, bukan isi tabel yang saat ini tertulis di kode. Manusia memang kadang menamai file `buku` lalu memasukkan anggota.

### C. Halaman Tambah Buku

```text
+--------------------------------------------------+
|                    SIMPUS-Mini        ☰          |
+--------------------------------------------------+
| Beranda | Daftar Buku | Tambah Buku |             |
| Daftar Anggota | Tambah Anggota                  |
+--------------------------------------------------+

+--------------------------------------------------+
|                  TAMBAH BUKU                     |
|                                                  |
| Judul                                            |
| [________________________________________]       |
|                                                  |
| Pengarang                                        |
| [________________________________________]       |
|                                                  |
| Tahun Terbit                                     |
| [_____________]                                  |
|                                                  |
| ISBN                                             |
| [________________________________________]       |
|                                                  |
| Kategori                                         |
| [ Fiksi ▼ ]                                      |
|                                                  |
|             [ SIMPAN ]                           |
+--------------------------------------------------+

|             © 2026 SIMPUS-Mini                  |
+--------------------------------------------------+
```

Form Tambah Buku memiliki input Judul, Pengarang, Tahun Terbit, ISBN, Kategori, serta tombol Simpan. Kategori terdiri dari Fiksi, Non-Fiksi, dan Referensi.

### D. Halaman Daftar Anggota

```text
+--------------------------------------------------+
|                    SIMPUS-Mini        ☰          |
+--------------------------------------------------+
| Beranda | Daftar Buku | Tambah Buku |             |
| Daftar Anggota | Tambah Anggota                  |
+--------------------------------------------------+

+--------------------------------------------------+
|                DAFTAR ANGGOTA                   |
+--------------------------------------------------+
| No. | Nama | Alamat | No. HP | Tgl Bergabung | Aksi|
+--------------------------------------------------+
| A001| Siti | Malang |0812xxx | 25-08-2025    |Edit|
|     |Aminah|        |        |               |Hapus|
+--------------------------------------------------+
| A002| Budi | Batu   |0813xxx | 20-08-2026    |Edit|
|     |Santoso|       |        |               |Hapus|
+--------------------------------------------------+

|             © 2026 SIMPUS-Mini                  |
+--------------------------------------------------+
```

Daftar Anggota memiliki kolom No. Anggota, Nama, Alamat, No. HP, Tanggal Bergabung, dan Aksi dengan tombol Edit serta Hapus.

### E. Halaman Tambah Anggota

```text
+--------------------------------------------------+
|                    SIMPUS-Mini        ☰          |
+--------------------------------------------------+
| Beranda | Daftar Buku | Tambah Buku |             |
| Daftar Anggota | Tambah Anggota                  |
+--------------------------------------------------+

+--------------------------------------------------+
|                TAMBAH ANGGOTA                   |
|                                                  |
| Nama                                             |
| [________________________________________]       |
|                                                  |
| No. Anggota                                      |
| [________________________________________]       |
|                                                  |
| No. HP                                           |
| [________________________________________]       |
|                                                  |
| Email                                            |
| [________________________________________]       |
|                                                  |
|             [ SIMPAN ]                           |
+--------------------------------------------------+

|             © 2026 SIMPUS-Mini                  |
+--------------------------------------------------+
```

Form Tambah Anggota berisi Nama, No. Anggota, No. HP, Email, dan tombol Simpan.

---
