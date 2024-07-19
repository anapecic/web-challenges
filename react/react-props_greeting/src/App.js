import "./styles.css";

export default function App() {
  return (
    <div>
      <Greeting name="Patchy" />
      <Greeting name="Brokkoli" isCoach />
    </div>
  );
}

function Greeting({ name, isCoach }) {
  return (
    <h1>
      Hello, {isCoach && "Coach"}
      {!isCoach && name}!
    </h1>
  );
}
