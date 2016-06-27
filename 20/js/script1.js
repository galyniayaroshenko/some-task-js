//task 20
var array;
array = [[[1,7],[2]],
        [3, [4,6,[6,7]],[5]]];

deepCopy = function (array) {
    var i, counter = 1;
    if (array.constructor !== Array) {
        return array;
    }
    var copy = array.constructor();
        for (i = 0; i < array.length; i++) {
            if (array[i].constructor === Array) {
                array[i] = deepCopy(array[i]);
                counter += 1;
                console.log('fcd', counter);
            } else {
                array[i] = array[i];
            }
        }
        // return array;

};
console.log(deepCopy(array));

//end task 20
