import { createServer } from "node:http";

export const server = createServer((request, response) => {
  response.statusCode = 201;
  response.end("Hello Ana");
});
