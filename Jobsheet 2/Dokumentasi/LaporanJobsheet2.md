# 1. Penjelasan `style.css`

File `style.css` digunakan untuk mengatur tampilan halaman SIMPUS-Mini agar lebih rapi.

## 1.1 Pengaturan Dasar

```css
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
```

Digunakan untuk mengatur semua elemen HTML agar tidak memiliki jarak bawaan dan ukuran elemen lebih mudah diatur.

## 1.2 Tampilan Body

```css
body {
    font-family: "Segoe UI", Arial, sans-serif;
    color: #2b2b2b;
    background-color: #f5f6f8;
    line-height: 1.5;
}
```

Digunakan untuk mengatur font, warna teks, warna background, dan jarak antarbaris.

## 1.3 Header dan Navigasi

```css
header {
    background-color: #1d5b8a;
    color: #fff;
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
```

Digunakan untuk membuat header berwarna biru dan mengatur posisi menu.

```css
header nav ul {
    list-style: none;
    display: flex;
    gap: 1.25rem;
}
```

Digunakan agar menu navigasi tersusun secara horizontal.

## 1.4 Tabel

```css
table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    text-align: left;
    padding: 0.65rem 0.75rem;
}
```

Digunakan untuk mengatur ukuran, posisi teks, dan jarak pada tabel.

```css
thead {
    background-color: #1d5b8a;
    color: #fff;
}
```

Memberikan warna biru pada bagian kepala tabel.

## 1.5 Tombol

```css
td button {
    padding: 0.35rem 0.7rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
```

Digunakan untuk mengatur ukuran dan bentuk tombol.

Tombol Edit diberi warna:

```css
td button:first-of-type {
    background-color: #f0ad4e;
    color: #fff;
}
```

Tombol Hapus diberi warna:

```css
td button:last-of-type {
    background-color: #d9534f;
    color: #fff;
}
```

## 1.6 Form

```css
form input,
form select {
    width: 100%;
    max-width: 400px;
    padding: 0.55rem 0.7rem;
    border: 1px solid #cdd4da;
    border-radius: 4px;
}
```

Digunakan untuk mengatur ukuran dan tampilan input serta pilihan pada form.

## 1.7 Tombol Simpan

```css
form button[type='submit'] {
    background-color: #1d5b8a;
    color: #fff;
    padding: 0.6rem 1.5rem;
    border-radius: 4px;
}
```

Digunakan untuk mengatur tampilan tombol **Simpan** pada form.

## 1.8 Footer

```css
footer {
    text-align: center;
    padding: 1.25rem;
    color: #7a8794;
    font-size: 0.9rem;
}
```

Digunakan untuk mengatur teks dan posisi footer.

## 1.9 Kesimpulan

File `style.css` digunakan untuk mengatur tampilan SIMPUS-Mini, seperti:

* Warna halaman.
* Header dan navigasi.
* Tabel.
* Tombol.
* Form.
* Footer.
* Jarak dan ukuran elemen.
