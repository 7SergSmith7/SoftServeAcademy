// Task 2

const alphabet = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

const morseString = ".... . -.--   .--- ..- -.. .";

function getMorseWords(morse) {
  return morse.split("   ");
}

function decodeMorse(morse) {
  return getMorseWords(morse)
    .map((word) =>
      word
        .split(" ")
        .map((letter) => alphabet[letter])
        .join("")
    )
    .join(" ");
}

function printAnswer(result) {
  alert(result);
}

function init() {
  printAnswer(decodeMorse(morseString));
}

init();
