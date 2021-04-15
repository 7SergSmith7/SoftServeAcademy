// Task 3

let welcomeMessage = `
Привет! 
Чтобы узнать счастливый ли у тебя билет, 
тебе нужно ввести номер твоего билета.`;
const finalLuckyAnswer = `
Поздравляю, у тебя счастливый билет!
Не потеряй его!`;
const finalUnluckyAnswer = `
К сожалению у тебя обычный билет.
Но не растраивайся, это не главное в жизни =)`;

let numberTicket = 0;

function getTicketInput(number) {
  do {
    number = prompt("Введите номер вашего билет от 1 до 999999.");
    if (+number > 0 && +number < 1000000) break;
  } while (true);

  return number;
}
function isTicketLucky(number) {
  let arrayNumbers = number.toString().split("").map(Number);
  if (arrayNumbers.length % 2 != 0) return false;
  else {
    let halfArray = arrayNumbers.length / 2;
    let firstPart = arrayNumbers.slice(0, halfArray);
    let secondPart = arrayNumbers.slice(halfArray, arrayNumbers.length);
    if (
      firstPart.reduce((a, b) => a + b) === secondPart.reduce((a, b) => a + b)
    )
      return true;
    else return false;
  }
}

function printAnswer(isLucky) {
  if (isLucky) alert(finalLuckyAnswer);
  else alert(finalUnluckyAnswer);
}

function init() {
  alert(welcomeMessage);

  printAnswer(isTicketLucky(getTicketInput(numberTicket)));
}

init();
