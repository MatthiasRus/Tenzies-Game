import Die from './Die.jsx'
import { useState, useRef, useEffect } from 'react';
import { nanoid } from "nanoid"
import Confetti from 'react-confetti';

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
    const [arrayNewDice, setArrayNewDice] = useState(() => generateAllNewDice());

    const diceElement = arrayNewDice.map((diceObj) => 
                        <Die 
                        key={diceObj.id} 
                        value={diceObj.value} 
                        isHeld={diceObj.isHeld}
                        hold={() => hold(diceObj.id)}
                        />)

    function rollDice(){
        gameWon ? setArrayNewDice(() => generateAllNewDice()):
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
    const gameWon = arrayNewDice.every(dice => dice.isHeld) && arrayNewDice.every(dice => dice.value === arrayNewDice[0].value);

    // accessibility improvement
    const buttonRef = useRef(null);
    useEffect(() => {
        gameWon && buttonRef.current?.focus();
    },[gameWon]);
    
    return (
        <main>
            {gameWon && <Confetti/>}
            <div className="gameInfo" aria-live="polite">
                {gameWon ? <p>Congratulations! You won! Press "New Game" to start again.</p>:
                <>
                    <h1 className="title">Tenzies</h1>
             <p className="instructions">Roll until all dice are the same.
                 Click each die to freeze it at its current value between rolls.</p>
                </>
                }
            </div>
            <div className="diesCont">
                {diceElement}
            </div>
            <div>
                <button ref={buttonRef} className={gameWon? "NewGame":"roll"} onClick={rollDice}>{gameWon? "New Game":"Roll"}</button>
            </div>
        </main>)
}

