// task 8
var number;
number = prompt("Введіть числа послідовності:", "20, 2, 3, 5");
function quantityEven(number) {
    var count, result,
        array = [],
        sum = 0;
    array = number.split(',');
    count = array.length;
    for (var i = 0; i < count; i++) {
        array[i] = parseInt(array[i], 10);
        if ((i % 2 === 0)) {
            sum = sum + 1;
        }
    }
    result = console.log("Кільість парних чисес які стоять на парних містях " + sum);
    return result;
}
quantityEven(number);
// end task 8
