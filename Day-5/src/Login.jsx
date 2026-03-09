import { useRef, useState } from "react";


function Login(){
    const emailRef = useRef(null);
    const passRef = useRef(null);

    function handleClick(e){
        e.preventDefault();

        console.log(emailRef.current.value);
        console.log(passRef.current.value);
    }

    return (
        <>
        <form onSubmit={handleClick}>
            <input type="email" ref={emailRef}/>
            <input type="password" ref={passRef}/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default Login;