import { useCallback, useEffect, useRef, useState } from "react";
import './App.css'

function App(){

    const [length, setLength] = useState(6);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");

    //useRef hook

    const passwordRef = useRef(null);

    useEffect(()=>{
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz";

        if(numberAllowed) str +="0123456789";
        if(charAllowed) str+="~!@#$%^&*()|{}[]?/><_:";

        for(let i = 1; i <= length; i++){
            let char = Math.floor(Math.random() * str.length);
            pass += str.charAt(char);

        }

        setPassword(pass);

    },[length, numberAllowed, charAllowed, setPassword])

    let copyPassword = useCallback(()=>{
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(password);
    },[password])

    return(
        <>
        <div className="w-full max-w-md mx-auto rounded-lg px-4 my-8 bg-gray-700 text-orange-500
        ">
            <h1 className="text-center text-white py-3">Password Generator</h1>
            <div className="flex shadow rounded-lg overflow-hidden mb-4
            ">
                <input type="text"
                    value={password}
                    className="outline-none w-full py-1 px-3 bg-white"
                    placeholder="password"
                    readOnly
                    ref={passwordRef}
                 />
                 <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyPassword}>Copy</button>

            </div>
            <div className="flex items-center py-1 px-1 gap-x-3 overflow-hidden w-full mx-auto">

                <div className="flex items-center gap-1">
                    <input type="range" 
                    min={6}
                    max={35}
                    value={length}
                    onChange={(e)=>{
                        setLength(e.target.value)
                    }}
                    />
                    <label>Length({length})</label>
                </div>

                <div className="flex items-center">
                    <input type="checkbox"
                    value={numberAllowed}
                    onChange={(e)=>{
                        setNumberAllowed(e.target.checked);
                    }}
                    id="numb"
                     />
                     <label htmlFor="numb">Numbers</label>
                </div>

                <div className="flex items-center">
                    <input type="checkbox"
                    value={charAllowed}
                    onChange={(e)=>{
                        setCharAllowed(e.target.checked);
                    }}
                    id="char"
                     />
                     <label htmlFor="char">Characters</label>
                </div>

            </div>
        </div>
        </>
    )
}

export default App;