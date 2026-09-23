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
