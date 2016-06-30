// task 6
var count, k;
count = prompt("Введіть n:", "20");
k = prompt("Введіть k:", "5");

 // what happen with funk if count and k will be undefined ?
function sumDigitsIsDivisible(count) {
    var nn, m, result;
    nn = 0;
    m = 0;
    for (var i = 1; i < count; i++) { 
        if (i % k === 0) {
            nn = nn + 1; // you can write shorter nn +=
        }
    }
    result = console.log("Кількість варінтів: ", nn);
    return result;
}
sumDigitsIsDivisible(count);
// end task 6
