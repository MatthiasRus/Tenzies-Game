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
        setArrayNewDice(prevArr => prevArr.map( dice =>
            dice.isHeld ? dice : {...dice, value: Math.ceil(Math.random() * 6)}
        )
            )
    }

    function hold(id){
        setArrayNewDice((prevArr) => prevArr.map(dice => (
            dice.id === id ? {...dice, isHeld:!dice.isHeld} : dice
        )))
    }
    return (
        <main>
            <div className="gameInfo">
                <h1 className="title">Tenzies</h1>
             <p className="instructions">Roll until all dice are the same.
                 Click each die to freeze it at its current value between rolls.</p>
            </div>
             
            <div className="diesCont">
                {diceElement}
            </div>
            <div>
                <button className="roll" onClick={rollDice}>Roll</button>
            </div>
        </main>)
}