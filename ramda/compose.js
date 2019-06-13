const R = require("ramda");
const getName = name => name.toString();
const execute = R.compose(
  getName,
  R.toUpper
);

const doubleValue = R.multiply(2);
const tripleValue = R.multiply(3);

const count = R.compose(
  R.map(doubleValue),
  R.map(tripleValue)
);

console.log("compose: ", execute("Kamu"));
console.log("compose double: ", count(R.range(1, 6)));
module.exports = { execute, count };
