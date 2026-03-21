import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState(localStorage.getItem("bgColor") || "olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl ">
            <button
              className="outline-none px-4 py-1 rounded-full text-white"
              onClick={() => {
                setColor("red");
                localStorage.setItem("bgColor", "red");
              }}
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white"
              onClick={() => {
                setColor("green");
                localStorage.setItem("bgColor", "green");
              }}
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white"
              onClick={() => {
                setColor("blue");
                localStorage.setItem("bgColor", "blue");
              }}
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white"
              onClick={() => {
                setColor("olive");
                localStorage.setItem("bgColor", "olive");
              }}
              style={{ backgroundColor: "olive" }}
            >
              Olive
            </button>{" "}
            <button
              className="outline-none px-4 py-1 rounded-full text-black"
              onClick={() => {
                setColor("lavender");
                localStorage.setItem("bgColor", "lavender");
              }}
              style={{ backgroundColor: "lavender" }}
            >
              Lavender
            </button>{" "}
            <button
              className="outline-none px-4 py-1 rounded-full text-white"
              onClick={() => {
                setColor("grey");
                localStorage.setItem("bgColor", "grey");
              }}
              style={{ backgroundColor: "grey" }}
            >
              Grey
            </button>{" "}
            <button
              className="outline-none px-4 py-1 rounded-full text-white"
              onClick={() => {
                setColor("pink");
                localStorage.setItem("bgColor", "pink");
              }}
              style={{ backgroundColor: "pink" }}
            >
              Pink
            </button>{" "}
            <button
              className="outline-none px-4 py-1 rounded-full text-white"
              onClick={() => {
                setColor("brown");
                localStorage.setItem("bgColor", "brown");
              }}
              style={{ backgroundColor: "brown" }}
            >
              Brown
            </button>{" "}
            <button
              className="outline-none px-4 py-1 rounded-full text-white"
              onClick={() => {
                setColor("Black");
                localStorage.setItem("bgColor", "black");
              }}
              style={{ backgroundColor: "Black" }}
            >
              Black
            </button>{" "}
            <button
              className="outline-none px-4 py-1 rounded-full text-black"
              onClick={() => {
                setColor("White");
                localStorage.setItem("bgColor", "white");
              }}
              style={{ backgroundColor: "wheat" }}
            >
              White
            </button>{" "}
            <button
              className="outline-none px-4 py-1 rounded-full text-white"
              onClick={() => {
                setColor("yellow");
                localStorage.setItem("bgColor", "yellow");
              }}
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>{" "}
            <button
              className="outline-none px-4 py-1 rounded-full text-white"
              onClick={() => {
                setColor("purple");
                localStorage.setItem("bgColor", "purple");
              }}
              style={{ backgroundColor: "purple" }}
            >
              Purple
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
