// Task 3

function chronos(y, m, d) {
  const daysOfWeek = {
    0: "Monday",
    1: "Tuesday",
    2: "Wednesday",
    3: "Thursday",
    4: "Friday",
    5: "Saturday",
    6: "Sunday",
  };
  let pastYears = y - 1;
  let days = 0;
  days =
    pastYears * 12 * 30 +
    parseInt(pastYears / 5) -
    parseInt(pastYears / 100) +
    parseInt(pastYears / 500);
  days += (m - 1) * 30 + d;
  console.log(days);
  if (y % 5 == 0 && m > 2) {
    if (y % 500 === 0) days++;
    if (y % 100 !== 0) days++;
  }

  return daysOfWeek[(days + 5) % 7];
}

function printAnswer(result) {
  alert(result);
}

function init() {
  printAnswer(chronos(1, 1, 1));
}

init();
