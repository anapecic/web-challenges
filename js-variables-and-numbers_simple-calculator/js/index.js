console.clear();

let operand1 = 12;
const operand2 = 4;

/*
Mathematical operations
*/
const addButton = document.querySelector('[data-js="add"]');
const subtractButton = document.querySelector('[data-js="subtract"]');
const multiplyButton = document.querySelector('[data-js="multiply"]');
const divideButton = document.querySelector('[data-js="divide"]');
const exponentButton = document.querySelector('[data-js="exponent"]');
const moduloButton = document.querySelector('[data-js="modulo"]');

addButton.addEventListener("click", () => {
  const addButtonResult = operand1 + operand2;
  console.log(addButtonResult);
});

subtractButton.addEventListener("click", () => {
  const addButtonResult = operand1 - operand2;
  console.log(addButtonResult);
});

multiplyButton.addEventListener("click", () => {
  const addButtonResult = operand1 * operand2;
  console.log(addButtonResult);
});

divideButton.addEventListener("click", () => {
  const addButtonResult = operand1 / operand2;
  console.log(addButtonResult);
});

exponentButton.addEventListener("click", () => {
  const addButtonResult = operand1 ** operand2;
  console.log(addButtonResult);
});

moduloButton.addEventListener("click", () => {
  const addButtonResult = operand1 % operand2;
  console.log(addButtonResult);
});

/*
Update the first operand

Please don't forget to think about the declaration of the variable "operand1".
*/
const increaseByOneButton = document.querySelector(
  '[data-js="increase-by-one"]'
);
const increaseByFiveButton = document.querySelector(
  '[data-js="increase-by-five"]'
);
const decreaseByOneButton = document.querySelector(
  '[data-js="decrease-by-one"]'
);
const decreaseByFiveButton = document.querySelector(
  '[data-js="decrease-by-five"]'
);
const multiplyByTwoButton = document.querySelector(
  '[data-js="multiply-by-two"]'
);
const divideByTwoButton = document.querySelector('[data-js="divide-by-two"]');

increaseByOneButton.addEventListener("click", () => {
  operand1++;
  console.log(operand1);
});

increaseByFiveButton.addEventListener("click", () => {
  operand1 += 5;
  console.log(operand1);
});

decreaseByOneButton.addEventListener("click", () => {
  operand1--;
  console.log(operand1);
});

decreaseByFiveButton.addEventListener("click", () => {
  operand1 -= 5;
  console.log(operand1);
});

multiplyByTwoButton.addEventListener("click", () => {
  operand1 *= 2;
  console.log(operand1);
});

divideByTwoButton.addEventListener("click", () => {
  operand1 /= 2;
  console.log(operand1);
});
