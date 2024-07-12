import { getRandomColor } from "./utils/randomColor.js";
import { Circle } from "./components/Circle/Circle.js";
import { Pentagon } from "./components/Pentagon/Pentagon.js";
import { Square } from "./components/Square/Square.js";

console.clear();

const root = document.getElementById("root");

root.append(Circle());

root.append(Pentagon());

root.append(Square());
// root.append(circle, square, pentagon);
