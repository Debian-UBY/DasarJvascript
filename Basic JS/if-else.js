// penggunaan basic pertama 
const isHujan = true;

console.log("hari ini jadi berangkat kegiatan");
if (isHujan) {
    console.log("hari ini hujan, bawa payung/mantol");
}
console.log("let's go!");

//pengunaan kedua
let language = "jawa";
let ucapan = "selamat pagi";

if (language == "inggris") {
    ucapan = "good morning";
} else if (language == "jawa") {
    ucapan = "sugeng enjeng sedoyo";
} else if (language == "malaysia") {
    ucapan = "selamat pagi cek gu";
}

console.log(ucapan);

//penggunaan dengan tenary operator
let isMember = true; // ketika false tidak dapat yen rep oleh kudu true
let diskon = isMember ? 0.5 : 0;
console.log("anda mendapatkan diskon " + diskon * 100 + "%");

//penggunaan dengan m,engunakan balooen
let nama = "";
if (nama) {
    console.log("Halo " + nama);
} else {
    console.log("nama kosong tidak diisi");
}