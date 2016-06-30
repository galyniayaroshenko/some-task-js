// task 4
var numberStr = "1, 3, 5,  , 5, 10,  , 4 ";

function maxEndMin(numberStr) {
    var array = [], max, min;

    array = numberStr.split(',');

    for (var i = 0; i < array.length; i++) {
        array[i] = parseInt(array[i], 10);
        if(array[i] >= array[0]){
            array[0] = array[i];
            max = array[0];
        }
    }
    // you have almost the same code as under it comment, please move same code to some helper function
    for (var i = 0; i < array.length; i++) {
        array[i] = parseInt(array[i], 10);
        if(array[i] <= array[0]){
            array[0] = array[i];
            min = array[0];
        }
    }
    return console.log("Максимальний елемент: " + max + '\n' +  "Мінімальний елемент: " +  min);
}
maxEndMin(numberStr);
// Math.max.apply(null, arr)
// end task 4
