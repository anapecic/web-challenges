// import { getRandomColor } from "./utils/randomColor.js";
// import { Circle } from "./components/Circle/Circle.js";
// import { Pentagon } from "./components/Pentagon/Pentagon.js";
// import { Square } from "./components/Square/Square.js";
import { Shape } from "./components/Shape/Shape.js";

console.clear();

const root = document.getElementById("root");
const circle = Shape("circle");
const square = Shape("square");
const pentagon = Shape("pentagon");
// root.append(Shape("pentagon"));

// root.append(Shape("square"));
root.append(circle, square, pentagon);
