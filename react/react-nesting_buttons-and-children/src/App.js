import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Click Me!</Button>
      <Button>Click Me!</Button>
      <Button>Test Me!</Button>
      <Button>Click Me!</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
