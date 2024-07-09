console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');
const numberA = document.querySelector("#number-a");
const numberB = document.querySelector("#number-b");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--

  const a = Number(numberA.value);
  const b = Number(numberB.value);

  if (event.target.elements.addition.checked) {
    result = add(a, b);
  } else if (event.target.elements.subtraction.checked) {
    result = subtract(a, b);
  } else if (event.target.elements.multiplication.checked) {
    result = multiply(a, b);
  } else if (event.target.elements.division.checked) {
    result = divide(a, b);
  }

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
