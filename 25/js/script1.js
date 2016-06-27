//task 25
var array, i, newArray = [];
array = [100, 10, 50, 5, 7, 6, 2, 60, 1, 30, 100];
console.log('Початковий масив: ', array);
for (var i = 1; i < array.length -2; i++) {
    curent = array[i];
    curentBefore = array[i-1];
    curentAfter = array[i+1];
    if(array[i] > array[i+1] + array[i-1]) {
        newArray.push(array[i]);
    }
}
if(array[0] > array[1] + array[0]/2) {
    newArray.push(array[i]);
}
if(array[array.length-1] > array[array.length-2] + array[array.length-1]/2) {
    newArray.push(array[i]);
    console.log('Отриманий масив: ', newArray);
}
//end task 25
