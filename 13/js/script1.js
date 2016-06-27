// task 13
//http://pas1.ru/array-spiral
var countArray, array = [], z, i, j;
countArray = +prompt("Введіть кількість елементів масиву:", "100");
// generation array
for(z = 0; z < countArray; z++){
    array[z] = Math.random() * (30 - (-30)) + (-30);
    array[z] = Math.round(array[z]);
}
// end generation array
if (countArray == 100) {
    for (i = 1; i < 11; i++) {
        for (j = i*10-10; j < i*10; j++) {
            document.write(array[j] + ' ');
        }
        document.write('</br>');
    }
    document.write('Вивід по спіралі: </br>');
    for (i = 1; i < 11; i++) {
        if ((i % 2) != 0) {
            for (j = i*10-10; j < i*10; j++) {
                document.write(array[j] + ' ');
            }
            document.write('</br>');
            } else {
                for (j = i*10-1; j > i*10-11; j--) {
                    document.write(array[j] + ' ');
            }
            document.write('</br>');
        }
    }
}
// end task 13
