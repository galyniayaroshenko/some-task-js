//task 24
var array, i, j, averageRes, arrayLength, result;
var leftAverage = [],
    rightAverage = [],
    average = 0;
array = [1, 20, 50, 5, 7, 6, 2, 60, 1, 55, 100];
arrayLength = array.length;
for (i = 0; i < arrayLength; i++) {
    average += array[i];
}
averageRes = average/arrayLength;
for (var j = 0; j < arrayLength; j++) {
   if (array[j] <= averageRes) {
       leftAverage.push(array[j]);
   } else {
      rightAverage.push(array[j]);
   }
}
leftAverage.sort(function (a, b) {
    return a - b;
});
rightAverage.sort(function (a, b) {
    return b - a;
});
result = leftAverage.concat(rightAverage);
console.log('result', result);
//end task 24
