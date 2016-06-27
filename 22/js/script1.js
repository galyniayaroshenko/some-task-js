//task 22
var countArrayFirst, array, countArraySecond, newArray, lastIndex, number, i, flag;
array = [1, 5, 9, 16, 22, 44, 48, 52, 70, 85 ];
newArray = [15];
countArraySecond = 15;
countArrayFirst = 10;
lastIndex = 0;
function getRandomArbitary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
while (lastIndex < countArraySecond) {
    number = getRandomArbitary(array[0], array[countArrayFirst-1]);
    flag = true;
    for (i = 1; i < countArrayFirst - 1; i++) {
        if (array[i] == number) {
            flag = false;
            break;
        }
    }
    if (flag = true) {
        lastIndex = lastIndex + 1;
        newArray[lastIndex] = number;
    }
}
for (var i = 0; i < countArraySecond; i++) {
    newArray.push(newArray[i]);
}
console.log('Початковий: ', array);
console.log('Отриманий: ', newArray);
//end task 22
