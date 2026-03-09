import TodoItem from "./TodoItem";
import "./TodoList.css";

export default function TodoList({ todos, onDelete, onToggle }) {
  if (todos.length === 0) {
    return (
      <div className="empty">
        <span>📝</span>
        <p>Koi todo nahi! Upar likho aur add karo.</p>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          text={todo.text}
          done={todo.done}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}