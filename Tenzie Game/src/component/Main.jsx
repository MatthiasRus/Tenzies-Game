import Die from './Die.jsx'

export default function Main(){
    return (
        <main>
            <div className="diesCont">
            <Die value={1}/>
            <Die value={2}/>
            <Die value={3}/>
            <Die value={1}/>
            <Die value={2}/>
            <Die value={3}/>
            <Die value={1}/>
            <Die value={2}/>
            <Die value={3}/>
            <Die value={4}/>
            </div>
        </main>)
}