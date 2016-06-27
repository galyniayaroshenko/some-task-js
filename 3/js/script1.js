// task 3 (сума координат клітинок одного кольору одгнакова по парності)
var a, b, c, d;

a = +prompt("Введіть число від 1 до 8", "1");
b = +prompt("Введіть число від 1 до 8", "1");
c = +prompt("Введіть число від 1 до 8", "1");
d = +prompt("Введіть число від 1 до 8", "1");

function sameColor(a, b, c, d) {
    if ((a+b) % 2 == 0 && (c+d) % 2 == 0){
        return console.log("Yes");
    } else {
        return console.log("No");
    }
}
sameColor(a, b, c, d);
// end task 3
