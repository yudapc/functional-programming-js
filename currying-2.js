console.log("----------Currying 2-----------");
const addingValue = value => value + 2;
const multipleValue = (a, b) => a * b;
const squareValue = a => a * a;

const firstValue = 10;

const counting = firstValue => addingValue => multipleValue => squareValue => {
  const count1 = addingValue(firstValue); //12
  const count2 = multipleValue(firstValue, count1); //120
  const count3 = squareValue(firstValue); //100
  return count1 + count2 + count3; //232
};

const running = counting(firstValue)(addingValue)(multipleValue)(squareValue);

console.log("counting: ", running);
console.log("firstValue: ", firstValue);
console.log("test counting: ", running === 232);
