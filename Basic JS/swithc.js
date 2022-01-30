let language = "jawa";
let ucapan = null;

switch (language) {
    case "inggris":
        ucapan = "good morning";
        break;

    case "jawa":
        ucapan = "sugeng enjeng sedoyo";
        break;

    case "malaysia":
        ucapan = " selamat pagi cek gu";
        break;

    default:
        ucapan = "selamat pagi";
        break;
}
console.log(ucapan);