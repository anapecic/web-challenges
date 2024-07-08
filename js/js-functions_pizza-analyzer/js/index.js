console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  let pizzaSize1 = Number(pizzaInput1.value);
  let pizzaSize2 = Number(pizzaInput2.value);
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza1, pizzaSize1);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

pizzaInput2.addEventListener("input", () => {
  let pizzaSize1 = Number(pizzaInput1.value);
  let pizzaSize2 = Number(pizzaInput2.value);
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza2, pizzaSize2);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1, diameter2) {
  const area1 = (Math.PI * (diameter1 * diameter1)) / 4;
  const area2 = (Math.PI * (diameter2 * diameter2)) / 4;
  const gainPizza = ((area2 - area1) / area1) * 100;
  outputSection.textContent = `Gain in Pizza: ${Math.round(gainPizza)}%`;
}

// Task 2
// define the function updatePizzaDisplay here

function updatePizzaDisplay(pizzaElement, newSize) {
  displaySize = (newSize / 24) * 100;
  pizzaElement.style.width = displaySize + "px";
}

// Task 3
// define the function updateOutputColor here

// function updateOutputColor(size1, size2) {
//   if (size2 < size1) {
//     outputSection.style.backgroundColor = "var(--red)";
//   } else {
//     outputSection.style.backgroundColor = "var(--green)";
//   }
// }

//logical operator / short-circuiting
function updateOutputColor(size1, size2) {
  size2 < size1 && (outputSection.style.backgroundColor = "var(--red)");
  size2 >= size1 && (outputSection.style.backgroundColor = "var(--green)");
}
