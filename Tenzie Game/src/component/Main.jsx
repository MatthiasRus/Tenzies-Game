import Die from './Die.jsx'
import { useState } from 'react';

export default function Main(){
    function generateAllNewDice(){
        // return Array(10).fill({value:0,isHeld:false}).map((obj)=>({...obj,value: Math.ceil(Math.random()*6)})); // potential bug due to reference
        return Array(10).fill(null).map(()=> ({value:Math.ceil(Math.random()*6),isHeld:false}))
    }
    const [arrayNewDice, setArrayNewDice] = useState(generateAllNewDice());

    const diceElement = arrayNewDice.map((dice) => <Die value={dice.value}/>)

    function rollDice(){
        setArrayNewDice(generateAllNewDice())
        console.log(diceElement)
    }
    return (
        <main>
            <div className="diesCont">
                {diceElement}
            </div>
            <div>
                <button className="roll" onClick={rollDice}>Roll</button>
            </div>
        </main>)
}