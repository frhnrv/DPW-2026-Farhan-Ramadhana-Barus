// Hamburger Menu
function initNavToggle() {
    const toggleBtn = document.getElementById("nav-toggle-btn");
    const nav = document.querySelector("header nav");
    if (!toggleBtn || !nav) return;

    toggleBtn.addEventListener("click", function() {
        nav.classList.toggle("nav-open");
    });
}

// Konfirmasi Hapus
function initHapusConfirm() {
    document.querySelectorAll(".btn-hapus").forEach(function (btn) {
        btn.addEventListener("click", function () {
            const row = btn.closest("tr");
            const nama = row ? row.querySelector("td")?.textContent : "data ini";
            const yakin = confirm("Yakin ingin menghapus \"" + nama + "\"?");
            if (yakin && row) {
                row.remove();
            }
        });
    });
}

// filter/pencarian tabel real time
function initTableFilter() {
    const input = document.getElementById("search-input");
    const table = document.querySelector(".table-responsive table");
    if (!input || !table) return;

    input.addEventListener("keyup", function(){
        const keyword = input.ariaValueMax.toLowerCase();
        const rows = table.querySelectorAll("tbody tr");
        rows.forEach(function(row) {
            const teks = row.textContent.toLocaleLowerCase();
            row.computedStyleMap.display = teks.includes(keyword) ? "" : "none";
        });
    });
}