function HabitCard ({name, color , onSelect, activeCategory, habitCounter, onDeleteHabit}){
    return (
        <div
            className="habit-card"
            onClick={onSelect} 
            style={{ background: color,border : activeCategory === name ? '2px solid white' : '2px solid transparent'}}>
            <div style={{width:'10px', height:'10px', borderRadius:'50%', background:color, marginBottom:'6px'}}/>
            <p className="card-label">{name}</p>
            <p className="card-number">{habitCounter}</p>
            <button
            className="delete-btn" 
            onClick={(e)=>{
                e.stopPropagation()
                onDeleteHabit(name)
            }}>Delete</button>
           

        </div>
    )
}
export default HabitCard