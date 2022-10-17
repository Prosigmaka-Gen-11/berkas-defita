// soal 1 return
function perkalian(angka1, angka2) {
    return angka1 * angka2;
};

// soal 2 variable
let dataDiri = {
    nama: "Defita",
    umur: 23,
    tempatTinggal: {
        kota: "Bekasi",
        provinsi: "Jawa Barat",
    },
    perkenalan: function () {
        return this.nama + " " + this.umur
    },
    hasilKali: perkalian(3,5),
};

//menampilkan console log
console.log(dataDiri.hasilKali);
let tes = dataDiri.perkenalan();
console.log(tes);
