// Mengambil & menampilkan daftar pemain secara asinkron dari data/pemain.json
async function muatDaftarPemain() {
    const tbody = document.querySelector(".table-responsive table tbody");
    const loading = document.getElementById("loading-indicator");
    if(!tbody) return;

    loading.style.display = "block";
    tbody.innerHTML = "";

    try {
        await new Promise((resolve) => setTimeout(resolve, 600));

        const res = await fetch("../data/pemain.json");
        if(!res.ok) {
            throw new Error("Gagal mengambil data (status "+ res.status+ ")");
        }
        const daftarPemain = await res.json();

        daftarPemain.forEach(function(pemain){
            const tr = document.createElement("tr");
            tr.innerHTML = 
            "<td>" + pemain.id_player + "</td>"+
            "<td>" + pemain.username + "</td>"+
            "<td>" + pemain.rank + "</td>"+
            "<td>" + pemain.email + "</td>"+
            "<td>" +
            "<button type=\"button\">Edit</button> " +
            "<button type=\"button\" class=\"btn-hapus\">Hapus</button>" + 
            "</td>";
            tbody.appendChild(tr);
        });
        initHapusConfirm();
    } catch (err) {
        tbody.innerHTML = 
        "<tr><td colspan=\"5\">Gagal memuat data: " + err.message + "</td></tr>";
    } finally {
        loading.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", muatDaftarPemain);