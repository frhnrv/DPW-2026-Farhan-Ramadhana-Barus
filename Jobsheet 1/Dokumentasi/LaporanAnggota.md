# 3. Penjelasan Folder `anggota/`

Folder `anggota/` berisi halaman untuk mengelola data anggota perpustakaan.

Terdapat dua file:

* `List.html` → menampilkan daftar anggota.
* `Tambah.html` → menampilkan form untuk menambah anggota.

## 3.1 `anggota/List.html`

File ini digunakan untuk menampilkan data anggota dalam bentuk tabel.

```html
<table>
    <thead>
        <tr>
            <th>No. Anggota</th>
            <th>Nama</th>
            <th>Alamat</th>
            <th>No. HP</th>
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

Data anggota yang digunakan:

| No. Anggota | Nama         | Alamat | No. HP   |
| ----------- | ------------ | ------ | -------- |
| A001        | Siti Aminah  | Malang | 0812xxxx |
| A002        | Budi Santoso | Batu   | 0813xxxx |

Pada kolom **Aksi** terdapat tombol:

```html
<button type="button">Edit</button>
<button type="button">Hapus</button>
```

Tombol tersebut masih belum berfungsi karena belum menggunakan JavaScript atau database.

## 3.2 `anggota/Tambah.html`

File ini digunakan untuk menampilkan form tambah anggota.

```html
<form>
    <label for="nama">Nama</label><br>
    <input type="text" id="nama" name="nama" required>

    <label for="no_anggota">No. Anggota</label><br>
    <input type="text" id="no_anggota" name="no_anggota" required>

    <label for="no_hp">No. HP</label><br>
    <input type="text" id="no_hp" name="no_hp">

    <button type="submit">Simpan</button>
</form>
```

Fungsi:

* `<form>` → membuat form.
* `<label>` → memberikan nama pada input.
* `<input>` → tempat memasukkan data.
* `required` → input wajib diisi.
* `type="submit"` → tombol untuk mengirim form.

Data yang dapat dimasukkan:

1. Nama
2. No. Anggota
3. No. HP

Tombol **Simpan** belum menyimpan data ke database karena halaman masih menggunakan HTML statis.

## 3.3 Kesimpulan

Folder `anggota/` digunakan untuk menampilkan dan memasukkan data anggota.

* `List.html` → daftar anggota.
* `Tambah.html` → form tambah anggota.

Keduanya masih menggunakan HTML sederhana dan belum terhubung ke database.
