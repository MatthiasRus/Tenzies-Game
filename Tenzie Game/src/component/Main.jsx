import Die from './Die.jsx'
import { useState } from 'react';

export default function Main(){
    function generateAllNewDice(){
        return Array(10).fill(0).map(()=>Math.ceil(Math.random()*6))
    }
    const [arrayNewDice, setArrayNewDice] = useState(generateAllNewDice());

    const diceElement = arrayNewDice.map(dice => (<Die value={dice}/>))

    function rollDice(){
        setArrayNewDice(generateAllNewDice())
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