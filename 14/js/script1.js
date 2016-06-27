// task 14
//http://pas1.ru/mult-positive
var countArray, array = [], z, i;
countArray = +prompt("Введіть кількість елементів масиву:", "10");
// generation array
for(z = 1; z < countArray; z++){
    array[z] = Math.random() * (25 - (-25)) + (-25);
    array[z] = Math.round(array[z]);
}
console.log('array[z]', array);
// end generation array
var index1 = 0,
    index3 = 0,
    index6 = 0,
    j = 0;

    for (i = 1; i < countArray; i++) {
        if (array[i] > 0) {
            j = j + 1;
            if (j == 1) {
                index1 = i;
                console.log('index1', index1);
            } else if (j == 3) {
                index3 = i;
                console.log('index3', index3);
            } else if (j == 6) {
                index6 = i;
                console.log('index6', index6);
                break;
            }
        }
    }
    if ((index1 != 0) && (index3 != 0) && (index6 != 0)) {
        var mult = array[index1]*array[index3]*array[index6];
        console.log('id елементів', index1, index3, index6);
        console.log('Mult:', mult);
    }
// end task 14
