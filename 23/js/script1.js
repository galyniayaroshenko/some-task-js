//task 23
var array, i, j, min, max, maxCounts, counts = {};
array = [3,1,3,2,1,14,1,1,1,3,4,1];
min = Math.min.apply(null, array),
max = Math.max.apply(null, array);
for(var i = 0; i < array.length; i++) {
    var num = array[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
}
maxCounts = counts[num];
if ((min < maxCounts) && (maxCounts < max)) {
    console.log('array satisfies our condition');
} else {
    console.log('array do not satisfies our condition');
}
//end task 23
