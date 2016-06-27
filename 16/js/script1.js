//task 16
//http://pas1.ru/longest-sequence
var countArray, array = [], j, i, resultAscending;
countArray = prompt("Введіть кількість елементів масиву:", "10");
// generation array
for(j = 0; j < countArray; j++){
    array[j] = Math.random() * (250 - (-250)) + (-250);
    array[j] = Math.round(array[j]);
}
console.log('array', array);
// end generation array
var lmax = 1,
    l = 1;
for(var i = 1; i < countArray; i++){
    if(array[i] > array[i-1]){
        l = l + 1;
    } else {
        if (l > lmax){
            lmax = l;
        }
        l = 1;
    }
}
console.log('lmax', lmax);
l = 1;
for(i = 1; i < countArray; i++){
    if(array[i] > array[i-1]){
        l = l + 1;
    } else {
        if(l == lmax) {
            for (var j = i-l; j < i; j++) {
              console.log('array[j]', array[j]);
            }
            l = 1;
        }
    }
}
//end task 16
