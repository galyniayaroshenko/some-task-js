//task 19
var array, arraySum, arrayAverage, arrayMax;
array = [1, [20, 50], 5, [7, 6], 2, 16, 22, [5, 9], 44, 48, [10, 30], 52, 70, 85 ];

function sum(array) {
    var i, j;
    for (i = 0; i < array.length; i++) {
        if (array[i].constructor === Array) {
            var sumRes = 0;
            for (j = 0; j < array[i].length; j++) {
                sumRes += array[i][j];
            }
            array[i] = sumRes;
        }
    }
    return array;
}
function average(array) {
    var i, j;
    for (i = 0; i < array.length; i++) {
        if (array[i].constructor === Array) {
            var averageRes = 0;
            for (j = 0; j < array[i].length; j++) {
                averageRes += array[i][j];
            }
            array[i] = averageRes/array[i].length;
        }
    }
    return array;
}
function max(array) {
    var i, j;
    for (i = 0; i < array.length; i++) {
        if (array[i].constructor === Array) {
            function getMaxOfArray(array) {
                return Math.max.apply(null, array);
            }
            array[i] =  getMaxOfArray(array[i]);
        }
    }
    return array;
}

arrayMax = max(array);
console.log('значення вкладеного масиву дорівнює максимальному елементу в масиві', arrayMax);
arrayMax.sort(function(a, b) {
    return a - b;
});
console.log('значення вкладеного масиву дорівнює максимальному елементу в масиві відсортований', arrayMax);


arrayAverage = average(array);
console.log('значення вкладеного масиву дорівнює середньому значенню всіх його елементів', arrayAverage);
arrayAverage.sort(function(a, b) {
    return a - b;
});
console.log('значення вкладеного масиву дорівнює середньому значенню всіх його елементів відсортований', arrayAverage);


arraySum = sum(array);
console.log('Значення вкладеного масиву дорівнює сумі всіх його елементів', arraySum);
arraySum.sort(function(a, b) {
    return a - b;
});
console.log('Значення вкладеного масиву дорівнює сумі всіх його елементів відсортований', arraySum);
//end task 19
