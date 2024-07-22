import React from "react";
import "./styles.css";
import Box from "./components/Box";

export default function App() {
  return (
    <main className="flex-container">
      <Boxes>
        <Box color="#007bff" />
        <Box color="#fc3" />
        <Box color="#ff3333" />
      </Boxes>
    </main>
  );
}

function Boxes({ children }) {
  return <>{children}</>;
}
