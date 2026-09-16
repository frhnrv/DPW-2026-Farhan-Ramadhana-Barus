# Pendahuluan

SIMPUS-Mini adalah aplikasi web sederhana yang dibuat untuk membantu pengelolaan data perpustakaan, terutama data buku dan anggota. Pada Jobsheet 6, aplikasi dikembangkan menggunakan HTML, CSS, dan JavaScript agar halaman tidak hanya bersifat statis, tetapi juga mampu memberikan berbagai interaksi kepada pengguna.

JavaScript digunakan untuk menjalankan beberapa fitur, seperti mengambil data buku dan anggota dari file JSON, melakukan pencarian data, menampilkan indikator ketika data sedang dimuat, melakukan validasi pada form, mengatur tampilan menu navigasi pada perangkat dengan layar kecil, serta memberikan konfirmasi sebelum data dihapus.

### JavaScript

```html
<script src="asset/js/app.js"></script>
```

Kode tersebut berfungsi untuk menghubungkan halaman Beranda dengan file JavaScript utama `app.js`. File tersebut berisi fungsi-fungsi yang digunakan secara umum pada aplikasi.

---

### Indikator Loading

```html
<p id="loading-indicator" style="display:none;">
    Memuat data...
</p>
```

Elemen tersebut digunakan untuk menampilkan informasi kepada pengguna bahwa sistem sedang dalam proses mengambil atau memuat data.

### `buku/list.html`

```html
<script src="../asset/js/app.js"></script>
<script src="../asset/js/buku.js"></script>
```

File `app.js` berisi fungsi umum yang digunakan pada aplikasi, seperti pencarian, validasi form, dan navigasi. Sementara itu, `buku.js` memiliki fungsi khusus untuk mengambil serta menampilkan data buku.

---

### `anggota/list.html`

```html
<script src="../asset/js/app.js"></script>
<script src="../asset/js/anggota.js"></script>
```

Pada halaman daftar anggota, `app.js` digunakan untuk fungsi umum, sedangkan `anggota.js` digunakan untuk mengolah dan menampilkan data anggota dari file JSON.

---

### `data/buku.json`

File `buku.json` digunakan sebagai sumber data yang ditampilkan pada halaman Daftar Buku.

Data yang tersedia terdiri dari **12 buku**. Setiap data buku mempunyai empat atribut, yaitu:

* `judul`
* `pengarang`
* `tahun`
* `stok`

Data dalam file JSON tersebut kemudian diambil oleh `buku.js` menggunakan Fetch API untuk ditampilkan pada tabel.

---

### `data/anggota.json`

File `anggota.json` digunakan sebagai sumber data untuk halaman Daftar Anggota.

Terdapat **4 data anggota** di dalam file tersebut. Setiap anggota memiliki lima atribut, yaitu:

* `no_anggota`
* `nama`
* `alamat`
* `no_hp`
* `tanggal_bergabung`

Data tersebut diproses oleh `anggota.js` dan kemudian ditampilkan ke dalam tabel pada halaman daftar anggota.

---

### `app.js`

`app.js` merupakan file JavaScript utama yang berisi fungsi-fungsi umum dan dapat digunakan oleh beberapa halaman dalam aplikasi.

#### Konfirmasi Hapus

```javascript
const btn = e.target.closest(".btn-hapus");
if (!btn) return;

const row = btn.closest("tr");
const yakin = confirm("Yakin ingin menghapus \"" + nama + "\"?");

if (yakin && row) {
    row.remove();
}
```

Kode tersebut digunakan untuk menangani proses penghapusan data. Program terlebih dahulu mencari tombol dengan class `.btn-hapus`. Setelah tombol ditemukan, pengguna akan mendapatkan pesan konfirmasi. Jika pengguna menyetujui penghapusan, baris data pada tabel akan dihapus.

Fitur ini masih berjalan pada sisi **front-end**, sehingga data yang dihapus hanya hilang dari tampilan halaman dan belum mengubah data pada file sumber.

---

### Penjelasan `buku.js`

#### Fungsi Memuat Data Buku

```javascript
async function muatDaftarBuku() {
    const tbody = document.querySelector(".table-responsive table tbody");
    const loading = document.getElementById("loading-indicator");
    if (!tbody) return;
}
```

Fungsi `muatDaftarBuku()` bertugas mengambil dan menampilkan data buku. Program terlebih dahulu mencari elemen `<tbody` pada tabel yang nantinya digunakan sebagai tempat untuk menampilkan data.

#### Loading Indicator

```javascript
loading.style.display = "block";
tbody.innerHTML = "";
```

Kode tersebut digunakan untuk menampilkan indikator loading selama proses pengambilan data berlangsung. Isi tabel juga dikosongkan terlebih dahulu agar data sebelumnya tidak tercampur dengan data yang baru.

#### Fetch API

```javascript
const res = await fetch("../data/buku.json");

if (!res.ok) {
    throw new Error("Gagal mengambil data (status " + res.status + ")");
}

const daftarBuku = await res.json();
```

`fetch()` digunakan untuk mengambil data dari file `buku.json`. Setelah data berhasil diperoleh, `res.json()` digunakan untuk mengubah data JSON menjadi objek JavaScript agar dapat diproses oleh program.

#### Menampilkan Data ke Tabel

```javascript
daftarBuku.forEach(function (buku) {
    const tr = document.createElement("tr");

    tr.innerHTML =
        "<td>" + buku.judul + "</td>" +
        "<td>" + buku.pengarang + "</td>" +
```
