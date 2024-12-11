import { useEffect, useState } from "react";

export default function Joker (){
    let [joke, setJoke] = useState({});   // initilaise as empty object//

    let Url = "https://official-joke-api.appspot.com/random_joke";

    let getNewJoke = async() =>{
       let response = await fetch(Url);
       let jsonResponse = await response.json();
       console.log(jsonResponse);
       setJoke({setup: jsonResponse.setup , punchline: jsonResponse.punchline});
    }

    useEffect(()=>{
        async function getFirstJoke(){
        let response = await fetch(Url);
        let jsonResponse = await response.json();
        setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline});
     }
     getFirstJoke();
    }, []) // first time only executem

    return (
        <div>
            <h2>Joker !</h2>
            <h3>{joke.setup}</h3>
            <h3>{joke.punchline}</h3>
            <button onClick={getNewJoke}> Get New Joke</button>
        </div>
    )
}