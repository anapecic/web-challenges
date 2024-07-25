// import { useState } from "react";
// import { getD6Roll } from "../../utils";
import D6 from "../D6";
import "./D6Button.css";

export function D6Button({ onHandleRoll, currentRollValue }) {
  return (
    <button className="d6-button" type="button" onClick={onHandleRoll}>
      <D6 value={currentRollValue} />
    </button>
  );
}

// child component - button
// button component: onClick
// onClick = {onHandleClick}
// onHandleClick muss in Props von Button Component

//parent component - App.js
// im component aufruf: müssen props vorkommen
// in return/ im Element: funktion "onHandle.." und weitere props
// definieren der props
