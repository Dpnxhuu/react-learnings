import { createRoot } from "react-dom/client";
import "./App.css";

let count = 0;

function render() {
  Root.render(
    <>
      <p>{count}</p>
      <button onClick={increaser}>increase</button>
      <button onClick={decreaser}>decrease</button>
    </>,
  );
}

function increaser() {
  count++;
  render();
}

function decreaser() {
  count--;
  render();
}

const Root = createRoot(document.getElementById("root"));
Root.render(
  <>
    <p>{count}</p>
    <button onClick={increaser}>increase</button>
    <button onClick={decreaser}>decrease</button>
  </>,
);
