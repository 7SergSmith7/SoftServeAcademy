// Task 1
let officeSize = [0, 0, 0];
const oneCanCoating = 16;
let numberСansForOffice;
let welcomeMessage =
  "Привет! Для вычисления количества необходимой красики, введите длину, ширину и высоту.";
const finalAnswer = "Необхожимое количество банок для покраски стен - ";

let wallArea;

function getUserInput(number) {
  do {
    number = +prompt("Введите число от 1 до 1000.");
    if (number > 0 && number <= 1000) break;
  } while (true);
  return number;
}

function calculateWallArea(arraySize) {
  wallArea = 2 * arraySize[2] * (arraySize[0] + arraySize[1]);
  return wallArea;
}

function calculateNumberСansForOffice(area) {
  numberСansForOffice = Math.ceil(area / oneCanCoating);
}

function printAnswer(answer) {
  alert(answer + numberСansForOffice);
}

function init() {
  alert(welcomeMessage);
  officeSize = officeSize.map((element) => getUserInput(element));
  calculateNumberСansForOffice(calculateWallArea(officeSize));
  printAnswer(finalAnswer);
}

init();
