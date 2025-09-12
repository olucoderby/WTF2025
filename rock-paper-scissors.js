const baskets = [
    { name: "Basket1", hasFruit: false },
    { name: "Basket2", hasFruit: true },
    { name: "Basket3", hasFruit: false },
];

let fruitFound = false;

function checkBasket(basketNumber) {
    const basket = baskets[basketNumber - 1];
    fruitFound = basket.hasFruit;

    if (fruitFound) {
        return basket.name + " has fruit";
    } else {
        return basket.name + " is empty";
    }
}

for (let i = 1; i <= baskets.length; i++) {
    console.log(checkBasket(1));
}

for (let i = 2; i <= baskets.length; i++) {
    console.log(checkBasket(2));
}
for (let i =3; i <= baskets.length; i++) {
    console.log(checkBasket(3));
}