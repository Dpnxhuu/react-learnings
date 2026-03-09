import "./TodoItem.css";

export default function TodoItem({ text, index, done, onDelete, onToggle }) {
  return (
    <li className={`todo-item ${done ? "done" : ""}`} onClick={() => onToggle(index)}>
      
      <div className="left">
        <div className={`circle ${done ? "checked" : ""}`}>
          {done && (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
        <span className="text">{text}</span>
      </div>

      <button
        className="delete-btn"
        onClick={(e) => { e.stopPropagation(); onDelete(index); }}
      >×</button>

    </li>
  );
}