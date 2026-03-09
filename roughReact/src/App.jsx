
import { useState } from "react";
import "./App.css";

function App(){

  let count = 0;

  function increase(){
    count++;
  }

  return(
    <>
    <p>{count}</p>
    <button onClick={increase}>increase</button>
    </>
  )
}

// export default App;