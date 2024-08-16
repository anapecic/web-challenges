import Chance from "chance";

const chance = new Chance();

export default function handler(request, response) {
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    profession: chance.profession(),
  };

  response.statusCode = 200;
  response.json(character);
}
