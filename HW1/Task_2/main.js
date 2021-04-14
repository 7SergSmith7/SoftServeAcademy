// Task 2
let sandPrises = [0, 0, 0];
let sandCapacities = [0, 0, 0];
let welcomeMessage = `Привет! 
  Для вычисления суммы вырученных средств с продажи песка, 
  необходимо будет ввести 3 цены килограмма разного песка 
  и 3 размера емкости для песка.`;
const finalAnswer = "Общий заработок - ";
let finalProfit = 0;

function getSandPrisesInput(number) {
  do {
    number = +prompt("Введите стоимость золотого песка от 1 до 100.");
    if (number > 0 && number <= 100) break;
  } while (true);
  return number;
}

function getSandCapacitiesInput(number) {
  do {
    number = +prompt("Введите размер емкости для золотого песка от 1 до 100.");
    if (number > 0 && number <= 100) break;
  } while (true);
  return number;
}

function sortArray(array) {
  array.sort(function (a, b) {
    return b - a;
  });
}

function calculateFinalProfit(arrayPrices, arrayCapacities) {
  sortArray(arrayPrices);
  sortArray(arrayCapacities);

  for (let i = 0; i < arrayPrices.length; i++) {
    finalProfit = finalProfit + arrayPrices[i] * arrayCapacities[i];
  }
}

function printAnswer(answer) {
  alert(answer + finalProfit);
}

function init() {
  alert(welcomeMessage);
  sandPrises = sandPrises.map((element) => getSandPrisesInput(element));
  sandCapacities = sandCapacities.map((element) => getSandPrisesInput(element));
  calculateFinalProfit(sandPrises, sandCapacities);
  printAnswer(finalAnswer);
}

init();
