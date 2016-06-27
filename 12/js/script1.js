// task 12
// revers, map, filter, forEach - відпадають бо створюють новий масив
// можна золоте січення
// можна застосувати swap
var array;
array = [1, 2, 3, 4, 5, 6];
console.log('array', array);
function myReverse(array, size){
    var i, k, result;
    for(i = 0; i < size / 2; i++){
        k = array[i];
        array[i] = array[size - i - 1];
        array[size - i - 1] = k;
    }
    result = console.log('arrayRevers', array);
    return result;
}
myReverse(array, 6);
// end task 12
