// task 10
//http://pas1.ru/two-array
var countArray1, countArray2, array1, array2, i, j;

countArray1 = prompt("Введіть введіть кількість елементів першого масиву:", "5");
countArray2 = prompt("Введіть введіть кількість елементів другого масиву:", "4");
array1 = [], array2 = [];
// generation arrays

// check for countArray1
for(i = 1; i < countArray1; i++){
    array1[i] = Math.random() * (300 - (0)) + (0);
    array1[i] = Math.round(array1[i]);
}
console.log('array1', array1);

// please avoid dublication of code almost the same as on 11-15 lines;
for(j = 1; j < countArray2; j++){
    array2[j] = Math.random() * (300 - (0)) + (0);
    array2[j] = Math.round(array2[j]);
}
console.log('array2', array2);
// end generation array

function sortArrays(array1, array2) {
    var i, j, k, result,
        arrLength = countArray1 + countArray2 - 1, // better to use this var on loop below
        newArray = [];
    for(i = 1; i < countArray1 + countArray2 - 1; i++) {
        for(j = 1; j < countArray1 + countArray2 - i; j++) {
            if (j < countArray1) {
                if (array1[j] > array1[j+1]) {
                    k = array1[j];
                    array1[j] = array1[j+1];
                    array1[j+1] = k;
                }
            }
            else if (j == countArray1) {
                if (array1[j-1] > array2[1]) {
                    k = array1[j-1];
                    array1[j-1] = array2[1];
                    array2[1] = k;
                }
            }
            else {
                k = array2[j-countArray1];
                array2[j-countArray1] = array2[j-countArray1+1];
                array2[j-countArray1+1] = k;
            }
        }
    }
    for( var i = 1; i < countArray1; i++){
        newArray.push(array1[i]);
    }
    for( var j = 48; j > 45; j--){ // what is this numbers mean?
        newArray.push(array2[j]);
    }
    result = console.log(newArray);
    return result;
}
sortArrays(array1, array2);
// end task 10
