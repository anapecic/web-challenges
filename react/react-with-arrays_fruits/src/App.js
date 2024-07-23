import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 1234, name: "Banana", color: "yellow" },
    { id: 2345, name: "apple", color: "red" },
    { id: 3456, name: "cherry", color: "red" },
    { id: 4567, name: "blueberry", color: "green" },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => {
        return <Card fruit={fruit} key={fruit.id} />;
      })}
    </div>
  );
}
