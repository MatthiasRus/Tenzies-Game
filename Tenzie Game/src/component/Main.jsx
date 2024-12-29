import Die from './Die.jsx'
import { useState } from 'react';
import { nanoid } from "nanoid"

export default function Main(){
    function generateAllNewDice(){
        // return Array(10).fill({value:0,isHeld:false}).map((obj)=>({...obj,value: Math.ceil(Math.random()*6)})); // potential bug due to reference
        return Array(10).fill(null).map(()=> (
            {
                value:Math.ceil(Math.random()*6),
                isHeld:false,
                id:nanoid()
            }))
    }
    const [arrayNewDice, setArrayNewDice] = useState(generateAllNewDice());

    const diceElement = arrayNewDice.map((diceObj) => 
                        <Die 
                        key={diceObj.id} 
                        value={diceObj.value} 
                        isHeld={diceObj.isHeld}
                        hold={() => hold(diceObj.id)}
                        />)

    function rollDice(){
        setArrayNewDice(generateAllNewDice())
    }

    function hold(id){
        console.log(id)
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