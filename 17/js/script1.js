//task 17
//http://www.cyberforum.ru/pascalabc/thread1143261.html
//http://pas1.ru/arithmetical-mean-negative
var countArray, array = [], i, j, z;
countArray = +prompt('Введіть кількість елементів масиву', '10');
    // generation array
    for(z = 0; z < countArray; z++){
        array[z] = Math.random() * (250 - (-250)) + (-250);
        array[z] = Math.round(array[z]);
    }
    console.log('array', array);
    // end generation array
    var count = 0,
        summa = 0,
        min_id = 1;

        for (i = 0; i < countArray; i++) {
            if (array[i] < 0) {
                count = count + 1;
                summa = summa + array[i];
                if (array[i] < array[min_id]) {
                    min_id = i;
                }
            }
        }
        mean = summa/count;
        array[min_id] = Math.round(mean);
        console.log('Середнє арифметичне відємних елементів', array[min_id]);
            for (i = 0; i < countArray; i++) {
                console.log(array[i]);
            }

//end task 17
