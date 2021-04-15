// Task 3

const finalAnswer = "Длина самого короткого слова - ";

let myStr =
  "turns out random test cases are easier than writing out basic ones";

function getShortestWord(str) {
  let shorterLength = 1000;
  let arrayFromStr = str.split(" ");
  for (let i = 0; i < arrayFromStr.length; i++) {
    if (shorterLength > arrayFromStr[i].length)
      shorterLength = arrayFromStr[i].length;
  }
  return shorterLength;
}

function printAnswer(result) {
  alert(finalAnswer + result);
}

function init() {
  printAnswer(getShortestWord(myStr));
}

init();
