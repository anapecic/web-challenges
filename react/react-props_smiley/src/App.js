import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Smiley text="happy boy" isHappy />
      <Smiley text="sad boy" />
    </div>
  );
}

function Smiley({ isHappy, text }) {
  return (
    <h1>
      {isHappy && text + " " + "🥹"}
      {!isHappy && text + " " + "😭"}
    </h1>
  );
}
