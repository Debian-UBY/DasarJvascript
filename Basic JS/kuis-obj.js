const restaurant = {
    name: "serbaguna",
    city: "ampel",
    favoritDrink: "lemon thea",
    "favoritd Food": "soto", //cara menggunakan propesties dengan spasi
    isVegan: true,
}
let name = restaurant.name;
let favoriteFood = restaurant["favoritd Food"]; //cara memanggil properties dengan spasi tadi
console.log(restaurant);

/*
 * Jangan hapus kode di bawah ini
 */
module.exports = { restaurant, name, favoriteFood };