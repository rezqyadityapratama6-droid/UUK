const inputNama = document.getElementById("nama") as HTMLInputElement;
const inputGajiPokok = document.getElementById("gajiPokok") as HTMLInputElement;
const inputJamLembur = document.getElementById("jamLembur") as HTMLInputElement;
const inputHariAbsen = document.getElementById("hariAbsen") as HTMLInputElement;
const btnHitung = document.getElementById("btnHitung") as HTMLButtonElement;
const hasilGaji = document.getElementById("hasilGaji") as HTMLElement;

function hitungGaji(): void {
    
    const nama: string = inputNama.value;
    const gajiPokok: number = Number(inputGajiPokok.value);
    const jamLembur: number = Number(inputJamLembur.value);
    const hariAbsen: number = Number(inputHariAbsen.value);

    const UPAH_LEMBUR_PER_JAM: number = 25000;
    const POTONGAN_PER_ABSEN: number = 100000;

    
    if (gajiPokok < 0 || jamLembur < 0 || hariAbsen < 0) {
        hasilGaji.innerHTML = "Error: Data tidak valid.";
        return;
    }

    const gajiBersih: number = gajiPokok + (jamLembur * UPAH_LEMBUR_PER_JAM) - (hariAbsen * POTONGAN_PER_ABSEN);
    let statusKedisiplinan: string = "";

    if (hariAbsen === 0) {
        statusKedisiplinan = "Sangat Disiplin";
    } else if (hariAbsen >= 1 && hariAbsen <= 2) {
        statusKedisiplinan = "Disiplin";
    } else if (hariAbsen >= 3 && hariAbsen <= 4) {
        statusKedisiplinan = "Cukup Disiplin";
    } else if (hariAbsen >= 5 && hariAbsen <= 6) {
        statusKedisiplinan = "Kurang Disiplin";
    } else {
        statusKedisiplinan = "Perlu Pembinaan";
    }

    hasilGaji.innerHTML = `
        <strong>Nama:</strong> ${nama} <br>
        <strong>Gaji bersih:</strong> Rp${gajiBersih.toLocaleString("id-ID")} <br>
        <strong>Kedisiplinan:</strong> ${statusKedisiplinan}
    `;
}
btnHitung.addEventListener("click", hitungGaji);