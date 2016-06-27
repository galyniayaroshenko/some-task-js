//task 28
var array = [1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0];
function compare(array) {
    var i, arrayLength, count = 0, maxCount = 0, maxId = 0, asd, minId;
    arrayLength = array.length;
    for (i = 0; i < array.length; i++) {
        if (array[i] == 1) {
            count += 1;
            if (count > maxCount) {
                maxCount = count;
                maxId = i - count + 1;
                minId = i + 1;
            }
        } else {
            count = 0;
        }
    }
    result = 'Максимальна кількість одиничок' + ' ' + count + '\n'
    + 'Кінець діапазону' + ' ' + minId + '\n'
    + 'Початок діапазону' + ' ' + maxId;
    return result;
}
console.log(compare(array));
//end task 28
