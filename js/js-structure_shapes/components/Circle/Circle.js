import { getRandomColor } from "../../utils/randomColor.js";

export function Circle() {
  const circleElement = document.createElement("div");
  circleElement.classList.add("circle");
  circleElement.addEventListener("click", () => {
    circleElement.style.backgroundColor = getRandomColor();
  });
  return circleElement;
}
