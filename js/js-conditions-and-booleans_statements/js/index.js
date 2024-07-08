console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

receivedPassword === SUPER_SECRET_PASSWORD
  ? console.log("Welcome! You are logged in as Brunhilde1984.")
  : console.log("Access denied!");

// Part 2: Even / Odd
const number = 6;
if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 42;
let priceOneDog;

if (numberOfHotdogs < 5) {
  priceOneDog = 2;
} else if (numberOfHotdogs > 5 && numberOfHotdogs < 100) {
  priceOneDog = 1.5;
} else if (numberOfHotdogs > 100 && numberOfHotdogs < 1000000) {
  priceOneDog = 1;
} else {
  priceOneDog = 0.1;
}

console.log(priceOneDog);

// Part 4: Daytime
const currentHour = 12;

const statement = "";

currentHour < 17
  ? console.log("Still need to learn...")
  : console.log("Partytime!");
console.log(statement);

// Part 5: Greeting
const userName = "Archibald";
const name = "coach name";

const greeting = "Hello " + (userName === name ? userName : name);

// console.log(
//   userName === nameCoach ? `Hello ${userName}` : `Hello ${nameCoach}`
// );

console.log(greeting);
