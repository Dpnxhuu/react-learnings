import TodoItem from "./TodoItem";
import './TodoList.css'


function TodoList({ todos }) {
  // 👆 props se todos array liya (destructuring)

  return (
  <ul className="todo-list">
    {todos.map((todo, index) => (
      <TodoItem key={index} text={todo} />
    ))}
  </ul>
);
}

export default TodoList;