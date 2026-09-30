# Laporan Penambahan PHP ke Database
## Jobsheet 8 - SIMPUS-Mini

## 1. Tujuan

Pada Jobsheet 8, aplikasi SIMPUS-Mini dikembangkan dari penyimpanan data menggunakan `session` menjadi menggunakan **database PostgreSQL**.

Penambahan utama pada jobsheet ini adalah:

1. Membuat koneksi PHP dengan PostgreSQL.
2. Membuat tabel `buku` dan `anggota`.
3. Menyimpan data buku ke database.
4. Mengambil data buku dari database.
5. Mengambil jumlah buku dan anggota dari database pada halaman beranda.
6. Menggunakan PDO untuk menjalankan query database.

Jadi PHP sekarang tidak cuma menyimpan data di session seperti manusia menyimpan tugas di folder "nanti dikerjakan", tetapi sudah mulai memakai database sungguhan.

---

# 2. Membuat Database

Database yang digunakan adalah PostgreSQL dengan nama:

```text
simpus_mini
```

Database ini digunakan untuk menyimpan data aplikasi SIMPUS-Mini.

---

# 3. Membuat Tabel Database

File:

```text
sql/01_buku_anggota.sql
```

digunakan untuk membuat tabel `buku` dan `anggota`.

## 3.1 Tabel Buku

```sql
CREATE TABLE IF NOT EXISTS buku (
    id SERIAL PRIMARY KEY,
    judul VARCHAR(255) NOT NULL,
    pengarang VARCHAR(255) NOT NULL,
    tahun INTEGER NOT NULL,
    isbn VARCHAR(50),
    stok INTEGER NOT NULL DEFAULT 0,
    kategori VARCHAR(50)
);
```

Tabel buku memiliki beberapa field:

| Field | Tipe Data | Keterangan |
|---|---|---|
| id | SERIAL | Primary Key |
| judul | VARCHAR(255) | Judul buku |
| pengarang | VARCHAR(255) | Nama pengarang |
| tahun | INTEGER | Tahun terbit |
| isbn | VARCHAR(50) | Nomor ISBN |
| stok | INTEGER | Jumlah stok |
| kategori | VARCHAR(50) | Kategori buku |

## 3.2 Tabel Anggota

```sql
CREATE TABLE IF NOT EXISTS anggota (
    id SERIAL PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    no_anggota VARCHAR(50) NOT NULL UNIQUE,
    alamat VARCHAR(255),
    no_hp VARCHAR(30)
);
```

Tabel anggota digunakan untuk menyimpan data anggota perpustakaan.

---

# 4. Membuat Koneksi PHP ke PostgreSQL

File baru yang ditambahkan:

```text
includes/koneksi.php
```

Isi koneksi:

```php
<?php
$host = "localhost";
$port = "5432";
$db   = "simpus_mini";
$user = "postgres";
$pass = "postgres";

try {
    $pdo = new PDO(
        "pgsql:host=$host;port=$port;dbname=$db",
        $user,
        $pass
    );

    $pdo->setAttribute(
        PDO::ATTR_ERRMODE,
        PDO::ERRMODE_EXCEPTION
    );
} catch (PDOException $e) {
    die("Koneksi database gagal: " . $e->getMessage());
}
```

Penjelasan:

- `$host` berisi alamat server database.
- `$port` berisi port PostgreSQL, yaitu `5432`.
- `$db` berisi nama database.
- `$user` berisi username PostgreSQL.
- `$pass` berisi password PostgreSQL.
- `new PDO()` digunakan untuk membuat koneksi PHP dengan PostgreSQL.
- `PDO::ATTR_ERRMODE` digunakan agar error database dapat ditampilkan.
- `try-catch` digunakan untuk menangani kegagalan koneksi.

---

# 5. Menghubungkan File PHP dengan Database

Setelah file koneksi dibuat, file PHP yang membutuhkan database memanggil:

```php
require __DIR__ . '/../includes/koneksi.php';
```

Contohnya pada `buku/list.php`:

```php
include __DIR__ . '/../includes/header.php';
require __DIR__ . '/../includes/koneksi.php';
```

Setelah file koneksi dipanggil, variabel `$pdo` dapat digunakan untuk menjalankan query.

---

# 6. Menyimpan Data Buku ke Database

Pada file:

```text
buku/proses_tambah.php
```

sebelumnya data buku disimpan ke session. Pada Jobsheet 8, data buku mulai disimpan ke database.

Query yang digunakan:

```php
$stmt = $pdo->prepare(
    "INSERT INTO buku (judul, pengarang, tahun, isbn, stok, kategori)
     VALUES (:judul, :pengarang, :tahun, :isbn, :stok, :kategori)
     RETURNING id"
);
```

Kemudian data dikirim menggunakan:

```php
$stmt->execute([
    'judul' => $judul,
    'pengarang' => $pengarang,
    'tahun' => (int) $tahun,
    'isbn' => $isbn,
    'stok' => (int) $stok,
    'kategori' => $kategori,
]);
```

Dengan cara ini data yang dimasukkan melalui form tambah buku akan masuk ke tabel `buku`.

## Prepared Statement

Kode menggunakan:

```php
$pdo->prepare()
```

dan parameter seperti:

```text
:judul
:pengarang
:tahun
```

Cara ini lebih aman dibandingkan memasukkan nilai pengguna secara langsung ke dalam query SQL.

---

# 7. Menampilkan Data Buku dari Database

Pada file:

```text
buku/list.php
```

ditambahkan query:

```php
$daftarBuku = $pdo
    ->query("SELECT * FROM buku ORDER BY id DESC")
    ->fetchAll(PDO::FETCH_ASSOC);
```

Query tersebut mengambil semua data dari tabel `buku`.

Kemudian data ditampilkan menggunakan `foreach`:

```php
foreach ($daftarBuku as $buku):
```

Data yang ditampilkan meliputi:

- Judul
- Pengarang
- Tahun
- Stok

Dengan demikian data yang tampil pada halaman daftar buku berasal dari database, bukan lagi dari session.

---

# 8. Menampilkan Jumlah Data pada Beranda

Pada file:

```text
index.php
```

ditambahkan koneksi database:

```php
require __DIR__ . '/includes/koneksi.php';
```

Kemudian jumlah buku dihitung menggunakan:

```php
$totalBuku = $pdo->query(
    "SELECT COUNT(*) FROM buku"
)->fetchColumn();
```

Jumlah anggota dihitung menggunakan:

```php
$totalAnggota = $pdo->query(
    "SELECT COUNT(*) FROM anggota"
)->fetchColumn();
```

Hasilnya ditampilkan pada halaman beranda:

```php
<?php echo $totalBuku; ?>
```

dan:

```php
<?php echo $totalAnggota; ?>
```

Jadi angka total pada beranda sekarang diambil langsung dari database.

---

# 9. Perubahan Penyimpanan Data

Pada jobsheet sebelumnya, data buku disimpan menggunakan session:

```php
$_SESSION['buku'][] = [
    'judul' => $judul,
    'pengarang' => $pengarang,
    'tahun' => (int) $tahun,
    'isbn' => $isbn,
    'stok' => (int) $stok,
    'kategori' => $kategori,
];
```

Pada Jobsheet 8, data buku disimpan menggunakan SQL:

```sql
INSERT INTO buku
```

Kemudian data ditampilkan menggunakan:

```sql
SELECT * FROM buku
```

Perubahannya dapat digambarkan:

```text
Jobsheet Sebelumnya

Form
  |
  v
PHP
  |
  v
Session
  |
  v
Data ditampilkan


Jobsheet 8

Form
  |
  v
PHP
  |
  v
PostgreSQL
  |
  v
Tabel Buku
  |
  v
Data ditampilkan
```

---

# 10. File yang Ditambahkan atau Diubah

| File | Perubahan |
|---|---|
| `includes/koneksi.php` | File baru untuk koneksi PostgreSQL |
| `sql/01_buku_anggota.sql` | Membuat tabel database |
| `index.php` | Mengambil jumlah buku dan anggota dari database |
| `buku/list.php` | Mengambil data buku dari database |
| `buku/proses_tambah.php` | Menyimpan data buku ke database |
| `buku/tambah.php` | Menggunakan koneksi database |
| `anggota/list.php` | Memanggil koneksi database |
| `anggota/tambah.php` | Memanggil koneksi database |
| `anggota/proses_tambah.php` | Memanggil koneksi database |

**Catatan:** Pada kode Jobsheet 8, proses tambah dan daftar **anggota masih menggunakan `$_SESSION['anggota']`**, sehingga belum sepenuhnya berpindah ke database. Koneksi database memang sudah dipanggil, tetapi datanya belum digunakan untuk `INSERT` dan `SELECT` seperti pada data buku.

---

# 11. Hasil Penambahan

Setelah PHP terhubung dengan PostgreSQL, aplikasi memiliki perubahan sebagai berikut:

1. Database `simpus_mini` dapat digunakan oleh aplikasi.
2. Tabel `buku` dan `anggota` tersedia.
3. Data buku dari form dapat disimpan ke database.
4. Data buku dapat ditampilkan kembali dari database.
5. Jumlah buku dan anggota dapat dihitung menggunakan SQL.
6. PHP dapat berkomunikasi dengan PostgreSQL menggunakan PDO.

---

# 12. Kesimpulan

Pada Jobsheet 8, aplikasi SIMPUS-Mini dikembangkan dengan menghubungkan PHP ke database PostgreSQL. Koneksi dibuat menggunakan PDO melalui file `includes/koneksi.php`.

Data buku sudah mulai menggunakan database dengan operasi `INSERT` untuk menyimpan data dan `SELECT` untuk menampilkan data. Halaman beranda juga mengambil jumlah buku dan anggota secara langsung dari database.

Namun, data anggota pada kode saat ini masih menggunakan session. Oleh karena itu, implementasi database belum sepenuhnya diterapkan pada seluruh fitur aplikasi.

Penggunaan database membuat penyimpanan data menjadi lebih terstruktur dan tidak bergantung pada session, sehingga menjadi dasar untuk pengembangan fitur CRUD yang lebih lengkap pada tahap berikutnya.
