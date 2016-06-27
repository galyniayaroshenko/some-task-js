//task 21
var array, convert, convertBack;
array = [0,2,1,5, 6];
function convert(array) {
    var i, j, arrayLength,
        newArray = [];
    arrayLength = array.length;
    for (i = 0; i < arrayLength; i++) {
        if (i % 2 === 0) {
            for (j = 0; j < array[i]; j++) {
                newArray.push(0);
            }
        } else {
            for (k = 0; k < array[i]; k++) {
                newArray.push(1);
            }
        }
    }
    return newArray;
}
function convertBack(array) {
    var i, j, arrayLength,
        newArray = [];
    arrayLength = array.length;
    for (i = 0; i < array.length; i++) {
        newArray.push(array[i]);
    }
    return newArray;
}
convert = convert(array)
console.log('', convert);
convertBack = convertBack(array);
console.log(convertBack);


//end task 21
