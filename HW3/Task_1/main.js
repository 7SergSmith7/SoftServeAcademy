// Task 1

const finalAnswer = "Правильная строка - ";
let stringNeedToSort = "is2 Thi1s T4est 3a";

function sortArrayOfStringsWithNums(array) {
  array.sort(function (a, b) {
    return getNumInString(a) - getNumInString(b);
  });
}

function getNumInString(str) {
  return parseInt(str.match(/\d+/));
}

function sortString(str) {
  let splitedArrayFromString = str.split(" ");
  sortArrayOfStringsWithNums(splitedArrayFromString);
  return splitedArrayFromString.join(" ");
}

function printAnswer(result) {
  alert(finalAnswer + result);
}

function init() {
  printAnswer(sortString(stringNeedToSort));
}

init();
