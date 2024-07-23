import "./Card.css";

export default function Card({ fruit }) {
  return <p className="card">{fruit.name}</p>;
}
