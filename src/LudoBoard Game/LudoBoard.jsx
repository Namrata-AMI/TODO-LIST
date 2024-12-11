import { useState } from "react"
export default function LudoBoard(){
    let [moves, setmoves] = useState({blue:0,yellow:0,green:0,red:0,})
    let upadateBlue = ()=>{
        console.log("moves.blue ="+moves.blue);
        setmoves((preMoves)=>{
          return  {...preMoves, blue: preMoves.blue + 1}
        })
    }
    let upadateYellow = ()=>{
        console.log("moves.yellow ="+ moves.yellow);
        setmoves((preMoves)=>{
          return  {...preMoves, yellow: preMoves.yellow + 1}
        })
    }
    let upadateGreen = ()=>{
        console.log("moves.green ="+moves.green);
        setmoves((preMoves)=>{
          return  {...preMoves, green: preMoves.green + 1}
        })
    }
    let upadateRed = ()=>{
        console.log("moves.red ="+moves.red);
        setmoves((preMoves)=>{
          return  {...preMoves, red: preMoves.red + 1}
        })
    }

    return (
        <>
        <div>
            <h4> game begins!</h4>
            <div className="board">
                <p>Blue moves: {moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={upadateBlue}>+1</button>
                <p>Red moves : {moves.red}</p>
                <button style={{backgroundColor:"red"}} onClick={upadateRed}>+1</button>
                <p>Green moves: {moves.green}</p>
                <button style={{backgroundColor:"green"}} onClick={upadateGreen}>+1</button>
                <p>Yellow moves: {moves.yellow}</p>
                <button style={{backgroundColor:"yellow"}} onClick={upadateYellow
                }>+1</button>
            </div>
        </div>
        </>
    )
}