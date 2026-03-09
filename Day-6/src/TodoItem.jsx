import './TodoItem.css'

function TodoItem({ text }) {
  // 👆 props se text liya

  return <li className="todo-item">{text}</li>;
}

export default TodoItem;