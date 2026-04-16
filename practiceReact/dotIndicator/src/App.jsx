import { useState } from "react";

function DotIndicator() {
  const [activeIndex, setActiveIndex] = useState(2);

  const totalDots = 7;
  

  return (
    <div className="h-[100vh] flex items-center justify-center gap-2 relative">
      <button id="left-side"
        className={`py-2 px-3 absolute left-1 top-[25%] border border-red-300 border-[2px] ${activeIndex < 1? 'cursor-not-allowed' : 'cursor-pointer'}`}
        onClick={()=>{
          if(activeIndex < 1) {
            return
          }
            else {
               setActiveIndex(activeIndex-1)
            }
        }}
      >
        Left
      </button>
      {Array.from({ length: totalDots }).map((_, index) => (
        <button
          key={index}
          onClick={() => setActiveIndex(index)}
          className={`transition-all duration-300 ${index === activeIndex ? "w-8 h-2 rounded-full bg-green-300" : "w-2 h-2 rounded-full bg-gray-600"}`}
        />
      ))}
      <button
      id="right-side"
        className={`py-2 px-3 absolute right-1 top-[25%] border border-red-300 border-[2px] ${activeIndex >= (totalDots-1)? 'cursor-not-allowed' : 'cursor-pointer'}`}
        onClick={()=>{
          if(activeIndex >= (totalDots-1)){
             return
          }
            else {
              setActiveIndex(activeIndex+1)
            }
        }}
      >
        Right
      </button>
    </div>
  );
}

export default DotIndicator;
