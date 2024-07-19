import React from "react";
import "./styles.css";

export default function App() {
  return <Button color="red" text="first Button" onButton={handleClick} />;
}

function Button({ color, text, onButton }) {
  return (
    <button style={{ backgroundColor: color }} onClick={onButton}>
      {text}
    </button>
  );
}

function handleClick() {
  alert("You clicked me!💀");
}
