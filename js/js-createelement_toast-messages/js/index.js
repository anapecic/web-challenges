console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  const newMessage = document.createElement("li");
  console.log(newMessage);

  toastContainer.append(newMessage);
  newMessage.classList.add("toast-container__message");
  newMessage.textContent = "I'm also a toast message.";
});

clearButton.addEventListener("click", () => {
  toastContainer.innerHTML = "";
});
