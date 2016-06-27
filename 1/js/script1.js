// task 1
var firstStr, secondStr, concat, firstLetterUpper;

firstStr = "first",
secondStr = "test";
concat = firstStr + " " + secondStr;
console.log('Зєднані стрічки в одну: ' + concat);

firstLetterUpper = firstStr.charAt(0).toUpperCase() + firstStr.substr(1) + " " + secondStr.charAt(0).toUpperCase() + secondStr.substr(1);
console.log('Перші букви великі: ' + firstLetterUpper);

// end task 1
