import { useState } from "react";
import TodoList from "./TodoList";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { text: input.trim(), done: false }]);
    setInput("");
  };

  const deleteTodo = (index) => setTodos(todos.filter((_, i) => i !== index));
  
  const toggleTodo = (index) =>
    setTodos(todos.map((t, i) => i === index ? { ...t, done: !t.done } : t));

  const completed = todos.filter(t => t.done).length;

  return (
    <div className="app">
      <h1>My Todo List ✅</h1>
      <p className="subtitle">{completed}/{todos.length} tasks complete</p>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: todos.length ? `${(completed / todos.length) * 100}%` : "0%" }}
        />
      </div>

      <div className="input-box">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
          placeholder="Naya todo likho..."
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />

      {todos.length > 0 && (
        <p className="tip">Click → complete &nbsp;|&nbsp; × → delete</p>
      )}
    </div>
  );
}