//
//Currying
//
console.log("----------Currying-----------");
const myWordsOperation = firstWord => secondWord => thirdWord => {
  return firstWord + " " + secondWord + " " + thirdWord;
};

console.log(myWordsOperation("John")("Mick")("Johannson"));
