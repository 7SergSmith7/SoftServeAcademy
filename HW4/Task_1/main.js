// Task 1

const ip1 = "10.0.0.0",
  ip2 = "10.0.0.50";

function getIpsBetween(firstIp, secondIp) {
  return getNumsIps(secondIp) - getNumsIps(firstIp);
}

function getNumsIps(ip) {
  let arrayIp = ip.split(".").map(Number);
  for (let i = 0; i < arrayIp.length - 1; i++) {
    arrayIp[i + 1] += arrayIp[i] * 256;
  }
  return arrayIp.pop();
}

function printAnswer(result) {
  alert(result);
}

function init() {
  printAnswer(getIpsBetween(ip1, ip2));
}

init();
