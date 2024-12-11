import { useState } from "react";
import { genTicket, sum } from "./helper.js";
import Ticket from "./Ticket.jsx";
import Button from "./button.jsx";

export default function Lottery_Ticket({n, winCondition}){
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);

    let buyTicket= ()=>{
        setTicket(genTicket(n))
    }


    return(
        <div>
            <h3>Lottery Ticket</h3>
            <Ticket ticket={ticket}/>
            <Button action={buyTicket}/>
            <br></br><br></br>
            <h2> {isWinning && "Congratulations you won!!"} </h2>
        </div>
    )
}