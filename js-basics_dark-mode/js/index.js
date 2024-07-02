console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const addDarkButton = document.querySelector('[data-js="dark-mode-button"]');

addDarkButton.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

const removeDarkButton = document.querySelector(
  '[data-js="light-mode-button"]'
);

removeDarkButton.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

const toggleButton = document.querySelector('[data-js="toggle-button"]');

toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
