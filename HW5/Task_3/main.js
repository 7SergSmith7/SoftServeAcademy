// Task 3

const inputClientsCash = [100, 25, 50];
const ticketCost = 25;
const banknote25 = 25;
const banknote50 = 50;
const banknote100 = 50;
let cashInOffice = [];

function trySaleTickets(clientsCash) {
  let numClients = clientsCash.length;
  for (let i = 0; i < clientsCash.length; i++) {
    let trySale;
    switch (clientsCash[i]) {
      case 25:
        trySale = addBancnote(clientsCash[i]);
        break;
      case 50:
        trySale = trySaleSaleWith50dollars(cashInOffice);
        break;
      case 100:
        trySale = trySaleWith100dollars(cashInOffice);
        break;
    }
    if (trySale) numClients--;
    else break;
  }
  if (numClients > 0) return "NO";
  else return "YES";
}

function trySaleWith100dollars(officeCash) {
  const indexBanknote25 = officeCash.indexOf(banknote25);
  const indexBanknote50 = officeCash.indexOf(banknote25);
  if (indexBanknote25 !== -1 && indexBanknote50 !== -1) {
    officeCash.splice(indexBanknote25, 1).splice(indexBanknote50, 1);
    officeCash.push(banknote200);

    return true;
  } else return false;
}

function trySaleSaleWith50dollars(officeCash) {
  const indexBanknote = officeCash.indexOf(banknote25);
  if (indexBanknote !== -1) {
    officeCash.splice(indexBanknote, 1);
    officeCash.push(banknote50);
    return true;
  } else return false;
}

function addBancnote(denomination) {
  cashInOffice.push(denomination);
  return true;
}

function printAnswer(result) {
  alert(result);
}

function init() {
  printAnswer(trySaleTickets(inputClientsCash));
}

init();
