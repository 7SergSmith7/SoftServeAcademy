// Task 2

const gameField = [
  [1, 2, 1],

  [2, 1, 2],

  [2, 1, 2],
];

function checkWin(field) {
  const winCombs = [
    [field[0][0], field[0][1], field[0][2]],
    [field[1][0], field[1][1], field[1][2]],
    [field[2][0], field[2][1], field[2][2]],
    [field[0][0], field[1][0], field[2][0]],
    [field[0][1], field[1][1], field[2][1]],
    [field[0][2], field[1][2], field[2][2]],
    [field[0][0], field[1][1], field[2][2]],
    [field[0][2], field[1][1], field[2][0]],
  ];
  const resultCombs = winCombs.map((el) => el.join(""));
  console.log(resultCombs);
  for (let i = 0; i < resultCombs.length; i++) {
    if (resultCombs[i] === "111") return 1;
    if (resultCombs[i] === "222") return 2;
  }
  return 0;
}
function getResult(field) {
  if (checkWin(field) === 0) {
    if (field.flat().some((el) => el === 0)) return -1;
    else return 0;
  } else return checkWin(field);
}

function printAnswer(result) {
  alert(result);
}

function init() {
  printAnswer(getResult(gameField));
}

init();
