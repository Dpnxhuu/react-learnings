import { useCallback, useMemo, useState } from "react";
import Sum from "./Sum.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber]  = useState(2000000);


  const handleClick = useCallback(()=>{
    console.log('hello', count);
  },[count])

  const prime = useMemo(()=>{

    let total = 0;

    for (let i = 2; i <= number; i++) {
      total++;

      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
          total--;
          break;
        }
      }
    }

    return total;

  },[number])

  console.log("App function");

  return (
    <>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
        setCount(count + 1);
      }}>Increase</button>

      <h2>Prime number between (0 to {number}): {prime}</h2>
      <button onClick={()=> setNumber(number+1000)}>Increase number</button>
      <br></br>
      <button onClick={handleClick}>useCallback</button>
      <Sum number={number}></Sum>
    </>
  );
}

export default App;
