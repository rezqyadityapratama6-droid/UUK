const inputPekerja = document.getElementById("pekerja") as HTMLInputElement;
const inputJamKerja = document.getElementById("jamKerja") as HTMLInputElement;
const inputUpahJam = document.getElementById("upahJam") as HTMLInputElement;
const btnSimpan = document.getElementById("btnSimpan") as HTMLButtonElement;
const tempatHasil = document.getElementById("hasil") as HTMLElement;

const daftarPekerja: string[] = [];
const daftarJam: number[] = [];
const daftarUpahJam: number[] = [];
const daftarUpah: number[] = [];

function hitungUpah(jam: number, upah: number): number {
    return jam * upah;
}

function hitungTotalUpah(): number {
    let total: number = 0;
    for (let i = 0; i < daftarUpah.length; i++) {
        total += daftarUpah[i];
    }
    return total;
}

function tampilkanData(): void {
    tempatHasil.innerHTML = "";
    let teksHtml: string = "";

    for (let i = 0; i < daftarPekerja.length; i++) {
        teksHtml += `Nama Pekerja: ${daftarPekerja[i]}<br>` +
                    `Jam Kerja: ${daftarJam[i]}<br>` +
                    `Upah per Jam: ${daftarUpahJam[i]}<br>` +
                    `Total Upah: ${daftarUpah[i]}<br><br>`;
    }

    const totalPengeluaran: number = hitungTotalUpah();
    teksHtml += `<strong>Total Pengeluaran Upah: Rp${totalPengeluaran.toLocaleString("id-ID")}</strong>`;
    
    tempatHasil.innerHTML = teksHtml;
}

function resetInput(): void {
    inputPekerja.value = "";
    inputJamKerja.value = "";
    inputUpahJam.value = "";
}

function simpanData(): void {
    if (inputPekerja.value === "" || inputJamKerja.value === "" || inputUpahJam.value === "") {
        alert("Semua kolom harus diisi!");
        return;
    }

    const nama: string = inputPekerja.value;
    const jam: number = Number(inputJamKerja.value);
    const upahPerJam: number = Number(inputUpahJam.value);

    daftarPekerja.push(nama);
    daftarJam.push(jam);
    daftarUpahJam.push(upahPerJam);

    const indeksBaru: number = daftarPekerja.length - 1;

    const totalUpahPekerja: number = hitungUpah(daftarJam[indeksBaru], daftarUpahJam[indeksBaru]);
    daftarUpah.push(totalUpahPekerja);

    tampilkanData();
    resetInput();
}

btnSimpan.addEventListener("click", simpanData);