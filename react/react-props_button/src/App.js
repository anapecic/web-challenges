import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Button color="red" text="first Button" onButton={handleClick} disabled />
      <Button color="red" text="first Button" onButton={handleClick} />
    </div>
  );
}

function Button({ color, text, onButton, disabled }) {
  return (
    <button
      style={{ backgroundColor: color }}
      onClick={onButton}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

function handleClick() {
  alert("You clicked me!💀");
}
