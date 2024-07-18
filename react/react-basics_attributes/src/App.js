import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Moin!</h2>
      <label htmlFor="name-input">Name:</label>
      <input id="name-input"></input>
      <a
        href="https://www.linkedin.com/in/ana-pecic/"
        className="article__link"
      >
        LinkedIn Ana
      </a>
    </article>
  );
}
