// task 1
var firstStr, 
    secondStr, concat, firstLetterUpper; // it's better to begin new var's in new line;

firstStr = "first",
secondStr = "test";
concat = firstStr + " " + secondStr;
console.log('Зєднані стрічки в одну: ' + concat); 
// better to write all coments in english lang;
firstLetterUpper = firstStr.charAt(0).toUpperCase() + firstStr.substr(1) + " " + secondStr.charAt(0).toUpperCase() + secondStr.substr(1);
console.log('Перші букви великі: ' + firstLetterUpper);

// end task 1
