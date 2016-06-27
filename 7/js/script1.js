// task 7
var count;
count = prompt("Введіть кількість гривнів:", "1.90");
function minimumNumberOfCoins(count) {
  var countKop, res50, result50, res25, result25, res10, result10, res5, result;
  countKop = count * 100;
      if (countKop % 50 === 0) {
          res50 = countKop / 50;
          result = console.log("Потрібно по 50 копійок - " + res50);
      } else {
          res50 = Math.floor(res50);
          result50 = countKop % 50;
          if (result50 % 25 === 0) {
              res25 =  result50 / 25;
              result = console.log("Потрібно по 50 копійок - " + res50 + "\n" + "Потрібно по 25 копійок - " + res25);
              } else {
                  res50 = Math.floor(countKop / 50);
                  res25 =  Math.floor(result50 / 25);
                  result25 = result50 % 25;
                  res10 = result25 / 10;
                  if (result25 % 10 === 0) {
                      result = console.log("Потрібно по 50 копійок - " + res50  + "\n" + "Потрібно по 25 копійок - " + res25   + "\n" + "Потрібно по 10 копійок - " + res10);
                      } else {
                          res10 = Math.floor(result25/10);
                          result10 = result25 % 10;
                          if (result10 % 5 === 0) {
                              res5 = result10 / 5;
                              result =  console.log("Потрібно по 50 копійок - " + res50 + "\n" +  "Потрібно по 25 копійок - " + res25  + "\n" + "Потрібно по 10 копійок - " + res10  + "\n" + "Потрібно по 5 копійок - " + res5);
                          }
                      }
            }
    }
    return result;
}
minimumNumberOfCoins(count);
// end task 7
