//task 27
var array = [10, -10, 50, 5, 7, -9, 5, 12, -15];
function compare(array) {
    var i, result, even = 0, odd = 0, arrayLength;
    arrayLength = array.length;
    for (i = 0; i < arrayLength; i++) {
        if (i % 2 == 0) {
             even += array[i];
        }
        else {
            odd += array[i];
        }
    }
    if (Math.abs(even) > Math.abs(odd)) {
        result = console.log('even more');
    } else {
        result = console.log('odd more');
    }
    return result;
}
console.log(compare(array));
//end task 27
