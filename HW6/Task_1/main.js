// Task 1

class Hex {
  constructor(value) {
    this.value = value;
  }

  valueOf() {
    return this.value;
  }
  convertToHex(value) {
    return "0x" + value.toString(16).toUpperCase();
  }

  toJSON() {
    return this.convertToHex(this.value);
  }
  toString() {
    return this.convertToHex(this.value);
  }
  plus(numOrhexObject) {
    let result = null;
    if (typeof numOrhexObject === "object")
      result = new Hex(this.value + numOrhexObject.valueOf());
    if (typeof numOrhexObject === "number")
      result = new Hex(this.value + numOrhexObject);
    return result;
  }
  minus(numOrhexObject) {
    let result = null;
    if (typeof numOrhexObject === "object")
      result = new Hex(this.value - numOrhexObject.valueOf());
    if (typeof numOrhexObject === "number")
      result = new Hex(this.value - numOrhexObject);
    return result;
  }
  static parse(hexStr) {
    return parseInt(hexStr.replace("0x", ""), 16);
  }
}

const hex = new Hex(255);

console.log(hex.toString());
console.log(hex.valueOf());
console.log(hex.toJSON());

const hex2 = new Hex(1);

console.log(hex.plus(hex2).toString());
console.log(hex.plus(hex2).valueOf());
console.log(hex.minus(hex2).toString());
console.log(hex.minus(hex2).valueOf());

console.log(Hex.parse("0xFF"));
console.log(Hex.parse("FF"));
