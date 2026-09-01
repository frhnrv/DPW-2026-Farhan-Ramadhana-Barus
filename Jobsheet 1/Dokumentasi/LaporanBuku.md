# 4. Penjelasan Folder `buku/`

Folder `buku/` berisi halaman untuk mengelola data buku perpustakaan.

Terdapat dua file:

* `List.html` → menampilkan daftar buku.
* `Tambah.html` → form untuk menambah buku.

## 4.1 `buku/List.html`

File ini digunakan untuk menampilkan daftar buku dalam bentuk tabel.

```html
<table>
    <thead>
        <tr>
            <th>Judul</th>
            <th>Pengarang</th>
            <th>Tahun</th>
            <th>Stok</th>
            <th>Aksi</th>
        </tr>
    </thead>
</table>
```

Fungsi tag:

| Tag       | Fungsi        |
| --------- | ------------- |
| `<table>` | Membuat tabel |
| `<tr>`    | Membuat baris |
| `<th>`    | Judul kolom   |
| `<td>`    | Isi data      |

Data buku yang ditampilkan:

| Judul                | Pengarang             | Tahun | Stok |
| -------------------- | --------------------- | ----: | ---: |
| Laskar Pelangi       | Andrea Hirata         |  2005 |    4 |
| Bumi Manusia         | Pramoedya Ananta Toer |  1980 |    2 |
| Negeri 5 Menara      | Ahmad Fuadi           |  2009 |    0 |
| Filosofi Teras       | Henry Menampiring     |  2018 |    5 |
| Ronggeng Dukuh Paruk | Ahmad Tohar           |  1982 |    1 |

Pada kolom **Aksi** terdapat tombol Edit dan Hapus.

```html
<button type="button">Edit</button>
<button type="button">Hapus</button>
```

Tombol tersebut belum memiliki fungsi karena belum menggunakan JavaScript atau database.

## 4.2 `buku/Tambah.html`

File ini digunakan untuk membuat form tambah buku.

```html
<form>
    <label for="Judul">Judul</label>
    <input type="text" id="judul" name="'judul" required>

    <label for="pengarang">Pengarang</label>
    <input type="text" id="pengarang" name="pengarang" required>

    <label for="tahun">Tahun Terbit</label>
    <input type="number" id="tahun" name="tahun" required>

    <label for="isbn">ISBN</label>
    <input type="text" id="isbn" name="isbn">

    <label for="kategori">Kategori</label>
    <select id="kategori" name="kategori">
        <option value="fiksi">Fiksi</option>
        <option value="non-fiksi">Non-Fiksi</option>
        <option value="referensi">Referensi</option>
    </select>

    <button type="submit">Simpan</button>
</form>
```

Data yang dapat dimasukkan:

* Judul
* Pengarang
* Tahun Terbit
* ISBN
* Kategori

`<input type="number">` digunakan untuk memasukkan angka pada tahun terbit.

`<select>` digunakan untuk memilih kategori buku:

* Fiksi
* Non-Fiksi
* Referensi

Tombol **Simpan** menggunakan `type="submit"` untuk mengirim form.

## 4.3 Kesimpulan

Folder `buku/` digunakan untuk menampilkan dan memasukkan data buku.

* `List.html` → daftar buku.
* `Tambah.html` → form tambah buku.

Data masih bersifat statis dan belum terhubung ke database.
