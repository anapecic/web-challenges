import { getRandomColor } from "../../utils/randomColor.js";

export function Shape(className) {
  const shapeElement = document.createElement("div");
  shapeElement.classList.add(className);
  shapeElement.addEventListener("click", () => {
    shapeElement.style.backgroundColor = getRandomColor();
  });
  return shapeElement;
}
