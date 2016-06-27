//task 29
var exports = {"a":1,"b":"2","C":[1,2,3],"d":{"aa":"aa","b":[3,4,5]}}
deepCopy = function (obj) {
    if (typeof obj != "object") {
        return obj;
    }
    var copy = obj.constructor();
    for (var key in obj) {
        if (typeof obj[key] == "object") {
            copy[key] = this.deepCopy(obj[key]);
        } else {
            copy[key] = obj[key];
        }
    }
    return copy;
};
console.log(deepCopy(exports));
//end task 29
