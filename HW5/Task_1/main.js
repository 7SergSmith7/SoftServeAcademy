// Task 1

const inputExpression = "@~~@@+@@";

function calculateQuipu(expression) {
  const sign = getSign(expression);
  console.log(sign);
  let nums = expression.split(sign).map((str) => getNums(str));
  return convertToQuipu(getNumResult(nums, sign));
}

function getNums(quipuString) {
  let num = 0;
  for (let i = 0; i < quipuString.length; i++) {
    if (quipuString[i] === "@") num++;
    else num *= 10;
  }
  return num;
}

function convertToQuipu(num) {
  const arrayFromNum = num.toString().split("").map(Number);
  let resultQuipu = [];
  for (let i = 0; i < arrayFromNum.length; i++) {
    if (arrayFromNum[i] !== 0) {
      let temp = [arrayFromNum[i]];
      resultQuipu.push(temp.fill("@"));
    } else resultQuipu.push("~");
  }
  return resultQuipu.join("");
}

function getSign(expression) {
  const regexSign = "[*+/-]";
  return expression.match(regexSign)[0];
}

function getNumResult(numsArray, signExp) {
  switch (signExp) {
    case "+":
      return numsArray[0] + numsArray[1];
    case "-":
      return numsArray[0] - numsArray[1];
    case "*":
      return numsArray[0] * numsArray[1];
    case "/":
      return nnumsArray[0] / numsArray[1];
  }
}

function printAnswer(result) {
  alert(result);
}

function init() {
  printAnswer(calculateQuipu(inputExpression));
}

init();
