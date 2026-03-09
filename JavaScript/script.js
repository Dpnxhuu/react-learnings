// const button = document.querySelector("button");
// let count = 0;

// button.addEventListener("click",()=>{
//     count++;
//     button.textContent = `Count is ${count}`;
// })

//Clock -->

// const p = document.querySelector("p");

// p.textContent = new Date().toLocaleTimeString();

// let intervalId = setInterval(() => {
//   p.textContent = new Date().toLocaleTimeString();
// }, 1000);

// let btn = document.querySelector("button");
// let show = true;
// btn.addEventListener("click", () => {
//   btn.textContent = `${show ? "show" : "hide"}`;
//   show = !show;
//   console.log(show);

//   if (btn.textContent === "show") {
//     p.style.visibility = "hidden";
//     clearInterval(intervalId);
//   } else {
//     p.style.visibility = "visible";
//     let intervalId = setInterval(() => {
//       p.textContent = new Date().toLocaleTimeString();
//     }, 1000);
//   }
// });


//count --->
// const p = document.querySelector("p");
// let count = 0;

// function render(){
//  p.textContent = `${count}`;
// }

// function increase(){
//   count++;
//   render();
// }

// function decrease(){
//   count--;
//   render();
// }

//StopWatch -->

// const h1 = document.querySelector("h1");
// const start = document.querySelectorAll("button")[0];
// const stop = document.querySelectorAll("button")[1];
// const reset = document.querySelectorAll("button")[2];
// let StopWatch = 0;
// let intervalId = null;
// start.addEventListener("click",()=>{

//   intervalId = setInterval(()=>{
//     h1.textContent = `Stopwatch: ${StopWatch++}`;
//   },1000)
// })

// stop.addEventListener("click",()=>{
//   clearInterval(intervalId);
// })

// reset.addEventListener("click",()=>{
//   clearInterval(intervalId);
//   StopWatch = 0;
//   h1.textContent = "Stopwatch: 0";
// })

//rough
let count = 1;
let intervalId = null;
function hello(){
  intervalId = setInterval(() => {
    console.log(count++)
  }, 1000);
}

hello();

setTimeout(() => {
  clearInterval(intervalId);
  console.log("clear");
}, 6000);