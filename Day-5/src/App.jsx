import { useEffect, useState } from "react";

// Stopwatch -->

function App() {
  let [count, setCount] = useState(0);
  let [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    let intervalId = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  },[isRunning]);

  return (
    <>
      <h1>Stopwatch: {count}</h1>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Stop</button>
      <button onClick={() => {setIsRunning(false);setCount(0);}}>Reset</button>
    </>
  );
}

export default App;
