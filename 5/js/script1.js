// task 5
var number;
number = powerOfTwo("Введіть a", "8");
function first(number) {
    if (!(number & (number - 1))) {
        return console.log("Yes");
    } else {
        return console.log("No");
    }
}
powerOfTwo(number);

function powerOfTwoOther(number) {
    var number, x, n1;
    number = prompt("Введите число n", 0);
        if (number != null) {/* If you do not press the abolition */
            x = 0;  /* of 2 degree */
            n1 = 0; /* Here is the result of 2 to the power of x */
                do { /* Started cycle */
                    x++; /* Increase the level of 1 */
                    n1 = Math.pow(2,x); /* Consider how much it will */
                } while (n1 < number); /* The cycle is repeated as long as our result will not be equal to or greater than the number n */
                if (n1 == number)
                    console.log("Число number = 2 в степени " + x);
                else
                    console.log("Число number не является степенью числа 2");
      }
}
powerOfTwoOther(number);
// end task 5
