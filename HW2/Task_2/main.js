// Task 2

const finalAnswer = "Два самых больших числа - ";

let myArray = [20, 21, 34, 56, 100];

function sortArray(array) {
  array.sort(function (a, b) {
    return b - a;
  });
}

function twoOldestAges(array) {
  sortArray(array);
  return array.slice(0, 2);
}

function printAnswer(result) {
  alert(finalAnswer + result);
}

function init() {
  printAnswer(twoOldestAges(myArray));
}

init();
