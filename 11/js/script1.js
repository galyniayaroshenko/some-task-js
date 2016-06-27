// task 11
//http://pas1.ru/date
var day, month, year;

day = +prompt("Введіть кількість днів:", "10");
month = +prompt("Введіть місяць:", "3");
year = +prompt("Введіть рік:", "2012");

function serialDateNumber(day, month, year) {
    var i, result,
        countDay = 0,
        M = [];
    M = [31,28,31,30,31,30,31,31,30,31,30,31];
    for (i = 0; i < month - 1; i++) {
        countDay = countDay + M[i];
    }
    countDay = countDay + day;

    if (year % 4 == 0) {
        if ((year % 100 == 0) && (year % 400 != 0)) {
            countDay = countDay;
        } else {
            countDay = countDay + 1;
        }
    }
    result = console.log('Номер дня з початку року:', countDay);
    return result;
}
serialDateNumber(day, month, year)



// end task 11
