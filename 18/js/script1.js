//task 18
//http://pas1.ru/mean
var countArray, array = [], element, i, mean;
countArray = +prompt('Введіть кількість елементів масиву', '10');
element = +prompt('Введіть елемент', '15');
    // generation array
    for (z = 1; z < countArray; z++){
        array[z] = Math.random() * (250 - (0)) + (0);
        array[z] = Math.round(array[z]);
    }
    console.log('array', array);
    // end generation array
    if (element > countArray) {
        element = countArray;
        mean = 0;
        for (i = 1; i < element; i++) {
            mean = mean + array[i];
        }
        mean = mean / element;
        console.log('Середнє значення', mean);
        for (i = 1; i < element; i++) {
            if ((Math.abs(array[i] - mean) / mean) > 0.5) {
                console.log('Різниця із середнім значенням перевищує 50%.', array[i]);
            }
        }
    }

//end task 18
