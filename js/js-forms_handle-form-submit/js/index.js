console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData); //hier entsteht object, dadurch können wir auf alles mit variable zugreifen statt event.target
  console.log(data.age); //mit data.age greife ich auf object zu und hier wird direkt der value ausgespuckt
  console.log(data.badness);
  console.log(Number(data.age) + Number(data.badness));
  event.target.reset();
  event.target.elements.firstName.focus();
});
