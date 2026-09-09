# Wireframe dan User Flow SIMPUS-Mini

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

# 2. User Flow

User flow menggambarkan alur pengguna ketika menggunakan sistem.

## A. User Flow Utama

```text
                    +----------------+
                    |    Beranda     |
                    +-------+--------+
                            |
             +--------------+--------------+
             |              |              |
             v              v              v
     +-------------+  +-------------+  +-------------+
     | Daftar Buku |  |Daftar Anggota|  | Tambah Data |
     +------+------+  +------+------+-  +-------------+
            |                |
            v                v
     +-------------+  +-------------+
     | Tambah Buku |  |Tambah Anggota|
     +------+------+  +------+------+
            |                |
            v                v
        [ Isi Form ]     [ Isi Form ]
            |                |
            v                v
         [Simpan]         [Simpan]
```

## B. User Flow Beranda

```text
Mulai
  |
  v
Buka Website
  |
  v
Beranda
  |
  +----> Lihat Total Buku
  |
  +----> Lihat Total Anggota
  |
  +----> Lihat Buku Sedang Dipinjam
  |
  +----> Lihat Buku Terlambat
  |
  v
Pilih Menu
```

## C. User Flow Mengelola Buku

```text
Beranda
   |
   v
Daftar Buku
   |
   +------> Melihat data buku
   |
   +------> Tambah Buku
   |            |
   |            v
   |       Isi Form Buku
   |            |
   |            v
   |          Simpan
   |
   +------> Edit
   |
   +------> Hapus
```

**Catatan:** Tombol Edit dan Hapus memang tersedia pada tabel di kode, tetapi belum memiliki fungsi JavaScript atau backend. Jadi pada kondisi sekarang tombolnya baru tampilan, belum melakukan aksi nyata.

## D. User Flow Mengelola Anggota

```text
Beranda
   |
   v
Daftar Anggota
   |
   +------> Melihat data anggota
   |
   +------> Tambah Anggota
   |            |
   |            v
   |       Isi Form Anggota
   |            |
   |            v
   |          Simpan
   |
   +------> Edit
   |
   +------> Hapus
```

## E. User Flow Tambah Anggota

```text
Mulai
  |
  v
Pilih "Tambah Anggota"
  |
  v
Form Tambah Anggota
  |
  v
Isi Nama
  |
  v
Isi No. Anggota
  |
  v
Isi No. HP
  |
  v
Isi Email
  |
  v
Klik "Simpan"
  |
  v
Data Anggota Tersimpan
```

## F. User Flow Tambah Buku

```text
Mulai
  |
  v
Pilih "Tambah Buku"
  |
  v
Form Tambah Buku
  |
  v
Isi Judul
  |
  v
Isi Pengarang
  |
  v
Isi Tahun Terbit
  |
  v
Isi ISBN
  |
  v
Pilih Kategori
  |
  v
Klik "Simpan"
  |
  v
Data Buku Tersimpan
```

---

# 3. Struktur Navigasi

```text
                         SIMPUS-Mini
                              |
                    +---------+---------+
                    |                   |
                 Beranda             Menu
                                        |
             +-------------+------------+-------------+
             |             |            |             |
             v             v            v             v
       Daftar Buku    Tambah Buku  Daftar Anggota  Tambah Anggota
             |             |            |             |
             +-------------+            +-------------+
```

## Kesimpulan

SIMPUS-Mini memiliki dua kelompok data utama:

* **Buku**

  * Daftar Buku
  * Tambah Buku
  * Edit Buku
  * Hapus Buku

* **Anggota**

  * Daftar Anggota
  * Tambah Anggota
  * Edit Anggota
  * Hapus Anggota

Sedangkan **Beranda** berfungsi sebagai halaman awal yang memberikan ringkasan kondisi perpustakaan.

Wireframe berfokus pada **susunan tampilan**, sedangkan user flow berfokus pada **langkah yang dilakukan pengguna saat menggunakan sistem**.
