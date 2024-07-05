console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  const now = 21;
  if (now < 5) {
    return "Good Night";
  } else if (now >= 5 && now < 13) {
    return "Good Morning";
  } else if (now >= 13 && now < 19) {
    return "Good Afternoon";
  } else if (now >= 19 && now < 23) {
    return "Good Evening";
  }
}

function getDayColor() {
  const today = new Date().getDay();
  if (today === 1) {
    return "darkgray";
  } else if (today >= 2 && today < 6) {
    return "lightblue";
  } else if (today === 6 || today === 0) {
    return "hotpink";
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
