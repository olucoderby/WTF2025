const cart = [];

const addToCart = (product, price) => {
   const item = { name: product, price: price };
   cart.push(item); 
};

addToCart("Bread", 2000);
addToCart("Sardine", 1200);
console.log("your cart", cart);
