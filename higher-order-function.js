//
// Pure function & immutable
//

console.log("----------Pure Function & Immutable-----------");
const initialValue = 50;
const increment = value => value + 1;
const valueToIncrement = initialValue;

console.log("value to increment: ", valueToIncrement);
console.log("increment: ", increment(valueToIncrement));
console.log("initialValue: ", initialValue);

//
// Higher order function
//
console.log("----------Higher Order Function-----------");
const isEven = num => {
  return num % 2 === 0;
};

const nums = [1, 2, 3, 4, 5, 6];

const evenNums = nums.filter(isEven);
console.log("evenNums: ", evenNums); // [2,4,6]
console.log("original nums: ", nums); // [1,2,3,4,5,6]

console.log("----------Higher Order Function 2-----------");
const capitalizeWord = word => {
  return word[0].toUpperCase() + word.slice(1, word.length);
};

const sentence = "you there. i'm batman!";

const uppercasedSentence = sentence
  .split(" ")
  .map(capitalizeWord)
  .join(" ");
const funcUppercasedSentence = sentence =>
  sentence
    .split(" ")
    .map(capitalizeWord)
    .join(" ");

console.log("uppercasedSentence: ", uppercasedSentence); // "You There. I'm Batman!"
console.log("funcUppercasedSentence: ", funcUppercasedSentence(sentence)); // "You There. I'm Batman!"
console.log("original sentence: ", sentence); // "you there. i'm batman!"
