// task 9
var count;
count = prompt("Введіть кількість цілих чисел:", "5");
function compositionMaximally(count) {
    var max1, max2, max3, j, i,
        array = [];
    // generation array
    for(j = 0; j < count; j++){
        array[j] = Math.random() * (30000 - (-30000)) + (-30000); // it's better to save this constant to the some variable and use it
        array[j] = Math.round(array[j]);
    }
    console.log('array', array);
    // end generation array
    max1 = -30000;
    max2 = max1; // you can use shortcase becouse all vars = the same value
    max3 = max1;
    for (i = 0; i < count; i++) {
        if (array[i] > max1) {
            max3 = max2;
            max2 = max1;
            max1= array[i];
        } else if (array[i] > max2) {
            max3 = max2;
            max2 = array[i];
        } else if (array[i] > max3) {
            max3 = array[i];
        }
    }
    result = console.log(max1, max2, max3);
    return result;
}
compositionMaximally(count);
// end task 9
