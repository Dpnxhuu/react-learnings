// // useState hook --->

// import { useState } from "react";

// import { useState } from "react";

// import { useState } from 'react';
// import './App.css';

// function App(){

//  // Method 1 create count -->

//     let count = 0;

//   function handle(){
//       const btn = document.querySelector("button");
//       count++;
//       btn.textContent = `Count is ${count}`;
//   }

//   return(
//     <button type="button" onClick={handle}>Count is 0</button>
//   )

//  // // Mehtod 2
// let [count, setCount] = useState(0);

// function increaseNumber(){
//   setCount(count+1);
// }

// return (
//   <>
//   <p>Counter: {count} </p>
//   <button onClick={increaseNumber}>Increment {count}</button>
//   </>
// );
// }

// export default App;

////useEffect hook in react --->>
// import "./App.css";

// import { use, useEffect, useState } from "react";
// function App() {
// //method 1 -->

// let [source, setSource] = useState('na')

// async function apiCall() {
//   const response = await fetch("https://api.github.com/users");
//   const data = await response.json();

//   try{

//     let i = 0;
//     data.forEach(res =>{
//       const img = document.createElement('img');
//       i++;
//       img.src = data[i].avatar_url;
//       document.querySelector("div").append(img)
//     });

//   }catch(err){
//     console.log(err);
//   }

// }

// apiCall();

// return (<></>);

// // method 2 ---> using useState hook

// let [users, setUsers] = useState([]);

// async function apiCall() {
//   const response = await fetch(`https://api.github.com/users`);
//   const data = await response.json();

//   setUsers(data);
//   // console.log("hello")
// }

// apiCall();

// return (
//   <>
//     <div style={{display: "flex", justifyContent:"center", alignItems: "center", flexWrap: "wrap"}}>
//       {
//         users.map(user =>( <img src={user.avatar_url} height={"200px"} alt="" />))
//       }
//     </div>
//   </>
// );

// method 3 --->

//   let [users, setUsers] = useState([]);
//   let [count, setCount] = useState(30)

//   useEffect(() => {
//     async function apiCall() {
//       const response = await fetch(`https://api.github.com/users?per_page=${count}`);
//       const data = await response.json();
//       setUsers(data);
//     }

//     apiCall();
//   }, [count]);

//   function handleChange(e){
//     setCount(e.target.value);
//     }

// return (
//   <>
//     <input type="number" onChange={handleChange} style={{margin:"10px auto"}}/>
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexWrap: "wrap",
//       }}>
//       {users.map((user) => (
//         <img src={user.avatar_url} height={"200px"} alt="img" />
//       ))}

//     </div>
//   </>
// );
// }
// export default App;

// next day -->
import './App.css';
import { useEffect, useState } from "react";
function App() {
 const [time, setTime] = useState(new Date().toLocaleTimeString());
 const [show, setShow] = useState(true)
 
 useEffect(()=>{

  if(!show) return;

  const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
      console.log("hi")
  }, 1000);

  return () =>{
    clearInterval(intervalId);
  }
 },[show])

  return(
    <>
    <button onClick={() => {setShow(!show)}}>{show? "Hide": "Show"}</button>
    {show&&<p>{time}</p>}
    </>
  )
}

export default App;
