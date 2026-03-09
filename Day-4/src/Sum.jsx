import React from "react";

const Sum = React.memo(({number})=>{

    function totalSum(){
        let sum = 0;
        for(let i = 1; i <= number; i++){
            sum+=i;
        }

        return sum;
    }

    let total = totalSum();

    console.log("Sum funciton");

    return(
        <>
        <h1>This is maths library</h1>
        <h2>Sum: {total}</h2>
        </>
    )

});

export default Sum;