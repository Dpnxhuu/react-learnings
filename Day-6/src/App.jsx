//Date: 09-03-2005


import { useState } from "react";
import TodoList from "./TodoList";
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  // 👆 todos = empty array se shuru

  const [input, setInput] = useState("");
  // 👆 input box ki value

  // ➕ Todo add karna
  const addTodo = () => {
    if (input === "") return; // empty todo mat add karo
    setTodos([...todos, input]);
    // 👆 purane todos + naya todo
    setInput(""); // input box clear karo
  };

  return (
  <div className="app">
    <h1>My Todo List</h1>

    <div className="input-box">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Todo likho..."
      />
      <button onClick={addTodo}>Add</button>
    </div>

    <TodoList todos={todos} />
  </div>
);
}

export default App;