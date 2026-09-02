# 1. Hasil Praktikum

## 1. Ubah Skema Warna

Pada `style.css`, warna tema:

```css
#1d5b8a
```

diganti menjadi warna merah, misalnya:

```css
#f10920
```

Karena warna tersebut digunakan di beberapa bagian CSS, perubahan terlihat pada **header, judul section, header tabel, dan tombol Simpan**.

Contoh:

```css
header {
    background-color: #f10920;
}

section h2 {
    color: #f109200;
}

thead {
    background-color: #f10920;
}

form button[type='submit'] {
    background-color: #f10920;
}
```

## 2. Tambah Kolom Keempat

Pada HTML ditambahkan satu `<article>` baru, misalnya:

```html
<article>
    <h3>Buku Terlambat</h3>
    <p>2</p>
</article>
```

Kemudian pada `style.css`:

```css
main section:nth-of-type(2) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
}
```

Perubahan `repeat(3, 1fr)` menjadi `repeat(4, 1fr)` membuat empat kartu statistik dapat ditampilkan dalam satu baris.

## 3. Buat Tombol Ketiga

Pada `buku/List.html`, tombol **Detail** ditambahkan di antara Edit dan Hapus:

```html
<td>
    <button type="button">Edit</button>
    <button type="button">Detail</button>
    <button type="button">Hapus</button>
</td>
```

Pada CSS sebelumnya:

```css
td button:first-of-type {
    background-color: #f0ad4e;
    color: #fff;
}

td button:last-of-type {
    background-color: #d9534f;
    color: #fff;
}
```

`Edit` tetap menjadi tombol pertama sehingga berwarna oranye, sedangkan `Hapus` tetap menjadi tombol terakhir sehingga berwarna merah. Tombol `Detail` tidak memiliki warna khusus sehingga mengikuti tampilan dasar tombol.

Agar lebih jelas, dapat diberikan class:

```html
<td>
    <button type="button" class="edit">Edit</button>
    <button type="button" class="detail">Detail</button>
    <button type="button" class="hapus">Hapus</button>
</td>
```

Kemudian:

```css
td button.edit {
    background-color: #f0ad4e;
    color: #fff;
}

td button.detail {
    background-color: #1d5b8a;
    color: #fff;
}

td button.hapus {
    background-color: #d9534f;
    color: #fff;
}
```

Dengan `class`, warna tombol ditentukan berdasarkan fungsi tombol, bukan berdasarkan posisinya.

## 4. Uji Responsivitas

Pada CSS terdapat:

```css
header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}
```

dan:

```css
header nav ul {
    display: flex;
    gap: 1.25rem;
}
```

Saat ukuran browser diperkecil, navbar akan menyesuaikan ruang yang tersedia. Jika ruang tidak cukup, `flex-wrap: wrap` membuat bagian header atau menu berpindah ke baris berikutnya.

Hasilnya, tampilan navbar tetap dapat digunakan pada ukuran layar yang lebih sempit.
