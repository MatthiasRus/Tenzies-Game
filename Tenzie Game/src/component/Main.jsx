import Die from './Die.jsx'

export default function Main(){
    function allNewDice(){
        return Array.from({length:10}, ()=>(Math.ceil(Math.random()*6)))
    }
    const arrayNewDice = allNewDice();
    return (
        <main>
            <div className="diesCont">
                {arrayNewDice.map(dice => (
                  <Die value={dice}/>   
                ))}
            </div>
        </main>)
}