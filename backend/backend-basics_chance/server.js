import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance();
const randomName = chance.name();
const randomAge = chance.age();
const randomProfession = chance.profession();

export const server = createServer((request, response) => {
  response.statusCode = 200;
  response.end(
    `Hello, my name is ${randomName} and I am ${randomAge} years old. I am a ${randomProfession}.`
  );
});
