export default function Die({value,isHeld,hold}){
    const styles = {backgroundColor: isHeld && "#59E391" };
    return (
        <div className="die">
            <button style={styles}
                    onClick={hold}>
                    {value}
            </button>
        </div>
    )
}