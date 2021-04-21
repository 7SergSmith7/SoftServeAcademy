// Task 2

const inputNum = 8;

function findPartMaxProd(num) {
  let productArray = [];
  const partitions = getPartition(num);
  partitions.forEach((array) =>
    productArray.push(array.reduce((a, b) => a * b))
  );

  const maxValue = getMaxOfArray(productArray);
  const maxIndexes = getIndexes(productArray, maxValue);
  let result = [];
  maxIndexes.forEach((index) => result.push(partitions[index]));
  result.push(maxValue);
  return result;
}

function getMaxOfArray(array) {
  return Math.max.apply(null, array);
}

function getIndexes(array, num) {
  let arrayIndex = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) arrayIndex.push(i);
  }
  console.log(arrayIndex);
  return arrayIndex;
}

function getPartition(num) {
  let partitionCombs = [];
  let fitstCombs = new Array(num);
  fitstCombs.fill(1);
  partitionCombs.push(fitstCombs);
  let tempArray = [];
  let currentArray;
  while (tempArray.length !== 1) {
    currentArray = partitionCombs[partitionCombs.length - 1];
    tempArray = currentArray.slice();
    tempArray[tempArray.length - 1]--;
    tempArray[tempArray.length - 2]++;
    tempArray = deleteHoles(sortArray(tempArray));
    partitionCombs.push(tempArray);
  }
  return partitionCombs;
}

function sortArray(array) {
  return array.sort((a, b) => b - a);
}

function deleteHoles(array) {
  return array.filter((el) => el > 0);
}

function printAnswer(result) {
  alert(result);
}

function init() {
  printAnswer(findPartMaxProd(inputNum));
}

init();
