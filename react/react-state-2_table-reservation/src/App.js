import React from "react";
import Counter from "./components/Counter";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(0);

  function handleDec() {
    setPeople((p) => p - 1);
  }

  function handleInc() {
    setPeople((p) => p + 1);
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter handleDec={handleDec} handleInc={handleInc} />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
