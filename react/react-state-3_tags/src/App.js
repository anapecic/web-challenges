import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);
  const handleAddTag = (tag) => {
    setTags([...tags, tag]);
    console.log(tag);
  };
  const handleDeleteTag = (tagName) => {
    setTags(
      tags.filter((tag) => {
        return tag !== tagName;
      })
    );
  };

  return (
    <main className="app">
      <Form onAddTag={handleAddTag} />
      <List tags={tags} onDeleteTag={handleDeleteTag} />
    </main>
  );
}
