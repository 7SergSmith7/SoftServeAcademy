// Task 2
class Dictionary {
  constructor() {
    this.wordsListing = [];
    this.definitionsListing = [];
  }

  newEntry(word, definition) {
    this.wordsListing.push(word);
    this.definitionsListing.push(definition);
  }

  look(word) {
    const index = this.findIndex(word);
    if (index === -1) {
      return `Can't find entry for ${word}`;
    } else return this.definitionsListing[index];
  }

  findIndex(word) {
    return this.wordsListing.indexOf(word);
  }
}

const dictionary = new Dictionary();
dictionary.newEntry("Apple", "A fruit that grows on trees");

console.log(dictionary.look("Apple"));
console.log(dictionary.look("Banana"));
