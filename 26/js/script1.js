//task 26
function price(products, count) {
    var products, i, j, price, result = [];
    price = [100, 10, 50, 5, 7, 6];
    productsArray = ['bread', 'meat', 'milk', 'cheese', 'fruits', 'vegetables'];
    for (i = 0; i < products.length; i++) {
      price[i] = price[i] * count[i];
      result.push(products[i] + ' ' + price[i]);
    }
    return result;
}
console.log(price(['bread', 'meat'], [6, 10]));
//end task 26
