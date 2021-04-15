// Task 1

const finalAnswer = "Сумма меньших значений в подмассивах - ";
let resultSum = 0;
let adArray = [
  [1, 2, 3, 4, 5],
  [5, 6, 7, 8, 9],
  [20, 21, 34, 56, 100],
];

function sortArray(array) {
  array.sort(function (a, b) {
    return a - b;
  });
}

function sumMin(array) {
  for (let i = 0; i < array.length; i++) {
    sortArray(array[i]);
    resultSum += array[i][0];
  }
  return resultSum;
}

function printAnswer(result) {
  alert(finalAnswer + result);
}

function init() {
  printAnswer(sumMin(adArray));
}

init();
