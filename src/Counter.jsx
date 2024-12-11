import { useState } from "react"
import { useEffect } from "react";

export default function Counter(){

    let [counterx, setCounterx] = useState(0);
    let [countery, setCountery] = useState(0);

    let updatex = () =>{
     setCounterx(
        (currCount)=> currCount+1)
     };

     let updatey = () =>{
        setCountery(
           (currCount)=> currCount+1)
        };

     useEffect(function printSomething(){
        console.log("this is side effect")
     }, [counterx])

    return(
        <div>
            <h3>count = {counterx}</h3>
            <button onClick={updatex}>+1</button>
            <h3>count = {countery}</h3>
            <button onClick={updatey}>+1</button>
        </div>
    )
}