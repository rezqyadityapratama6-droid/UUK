"use strict";
const inputPekerja = document.getElementById("pekerja");
const inputJamKerja = document.getElementById("jamKerja");
const inputUpahJam = document.getElementById("upahJam");
const btnSimpan = document.getElementById("btnSimpan");
const tempatHasil = document.getElementById("hasil");
const daftarPekerja = [];
const daftarJam = [];
const daftarUpahJam = [];
const daftarUpah = [];
function hitungUpah(jam, upah) {
    return jam * upah;
}
function hitungTotalUpah() {
    let total = 0;
    for (let i = 0; i < daftarUpah.length; i++) {
        total += daftarUpah[i];
    }
    return total;
}
function tampilkanData() {
    tempatHasil.innerHTML = "";
    let teksHtml = "";
    for (let i = 0; i < daftarPekerja.length; i++) {
        teksHtml += `Nama Pekerja: ${daftarPekerja[i]}<br>` +
            `Jam Kerja: ${daftarJam[i]}<br>` +
            `Upah per Jam: ${daftarUpahJam[i]}<br>` +
            `Total Upah: ${daftarUpah[i]}<br><br>`;
    }
    const totalPengeluaran = hitungTotalUpah();
    teksHtml += `<strong>Total Pengeluaran Upah: Rp${totalPengeluaran.toLocaleString("id-ID")}</strong>`;
    tempatHasil.innerHTML = teksHtml;
}
function resetInput() {
    inputPekerja.value = "";
    inputJamKerja.value = "";
    inputUpahJam.value = "";
}
function simpanData() {
    if (inputPekerja.value === "" || inputJamKerja.value === "" || inputUpahJam.value === "") {
        alert("Semua kolom harus diisi!");
        return;
    }
    const nama = inputPekerja.value;
    const jam = Number(inputJamKerja.value);
    const upahPerJam = Number(inputUpahJam.value);
    daftarPekerja.push(nama);
    daftarJam.push(jam);
    daftarUpahJam.push(upahPerJam);
    const indeksBaru = daftarPekerja.length - 1;
    const totalUpahPekerja = hitungUpah(daftarJam[indeksBaru], daftarUpahJam[indeksBaru]);
    daftarUpah.push(totalUpahPekerja);
    tampilkanData();
    resetInput();
}
btnSimpan.addEventListener("click", simpanData);
