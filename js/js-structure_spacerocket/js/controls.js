import { launch } from "./core/protocol.js";
import * as launchSequence from "./launchSequence.js";

export function initialize() {
  const launchButton = document.querySelector('[data-js="launch"]');
  launchButton.addEventListener("click", () => {
    launch(launchSequenceFunction);
  });
}
