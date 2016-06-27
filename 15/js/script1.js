 //task 15
//по возрастанию:метод выбора (SelectionSort),метод пузырька (BubbleSort),метод простых вставок (InsertionSort)
//метод бинарных вставок (BinaryInsertionSort),метод Шелла (ShellSort),метод Уильяма Флойда, бинарных деревьев (HeapSort)
//метод фон Неймана, слияний (NeumanSort),метод быстрой сортировки (QuickSort)
var countArray, array = [], i, resultAscending, resultDescending ;
countArray = prompt("Введіть кількість елементів масиву:", "10");
// generation array
for(i = 0; i < countArray; i++){
    array[i] = Math.random() * (25 - (-25)) + (-25);
    array[i] = Math.round(array[i]);
}
console.log('array', array);
// end generation array
array.sort(function(a, b) {
    return a - b;
});
resultAscending = console.log('За зростанням: ' + array);
array.sort(function(a, b) {
    return b - a;
});
resultDescending = console.log('За зменшенням: ' + array);

//another option
function bubbleSort(array, countArray){
    var i, j, k, result;
    for(i = 0; i < countArray-1; i++) {
        for(j =0; j < countArray-i; j++){
            if (array[j] > array[j+1] ){
                k = array[j];
                array[j] = array[j+1];
                array[j+1] = k;
            }
        }
    }
    result = console.log('За зростанням: ' + array);
    return result;
}
function bubbleSortBack(array, countArray){
    var i, j, k, result;
    for(i = 0; i < countArray-1; i++) {
        for(j = 0; j < countArray-i; j++){
            if (array[j] < array[j+1] ){
                k = array[j];
                array[j] = array[j+1];
                array[j+1] = k;
            }
        }
    }
    result = console.log('За зменшенням: ' + array);
    return result;
}
function bubbleSortBackEven(array, countArray){
    var i, result,
        newArray = [];
    for (var i = 0; i < countArray; i++) {
      if (array[i] % 2 == 0) {
         newArray.push(array[i]);
      }
    }
    for (var i = 0; i < countArray; i++) {
      if (array[i] % 2 == 1) {
          newArray.push(array[i]);
      }
    }
    result = console.log('Cпочатку всі парні, потім все непарні: ', newArray);
    return result;
}
bubbleSort(array, countArray);
bubbleSortBack(array, countArray);
bubbleSortBackEven(array, countArray);
// end task 15
