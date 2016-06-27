// task 2
var someStr = "When;I was,in Germany first time-I was,six";
function replaceSymbols(someStr) {
    var countLetter,
        replaceSymbols,
        counterWords,
        regExpCounterWords,
        regExpSymbols,
        result;
    countLetter = someStr.length;
    regExpCounterWords = / +(?:\S)/;
    regExpSymbols = /[\,\;]/g;
    replaceSymbols = someStr.replace(regExpSymbols, " ");
    counterWords = replaceSymbols.split(regExpCounterWords).length + 1;
    result = console.log("Стрічка з заміненими символами: " + replaceSymbols +"\n"+ "Кількість символів в стрічці: " + countLetter + "\n" + "Кількість слів в стрічці: " +  counterWords);
    return result;
}
replaceSymbols(someStr);
// end task 2
