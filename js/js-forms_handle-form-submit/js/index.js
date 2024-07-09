console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);
  console.log(
    Number(event.target.age.value) + Number(event.target.badness.value)
  );
  event.target.reset();
  event.target.elements.firstName.focus();
});
