const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) =>  num1 - num2;



const sum = array => {
  let total = 0;
  for (const arg of array) {
    total += arg;
  }
  return total;
}

array = [2, 4, 6, 8, 10, 12, 14];

const multiply = array => {
  total = 1;
  for (const f of array) {
    total *= f;
  }
  return total;
};

const power = (num1, num2) => num1 ** num2;

const factorial = number => {
  let total = 1;
  for (let i = number; i >= 1; i--) {
    total *= i;
  }
  return total;
};
	


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
