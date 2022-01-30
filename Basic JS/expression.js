//menggunakan expression di function
const greeting = function(name, language) {
    if (language == "english") {
        return "good morning " + name + "";
    } else if (language == "jawa") {
        return "sugeng enjeng " + name + " ";
    } else {
        return "selamat pagi" + name + "";
    }
}

console.log(greeting("bu cangek", "jawa"));