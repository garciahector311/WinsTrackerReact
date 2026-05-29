import { useState } from 'react'


function AddHabitForm({onAddHabit}){
    const [newHabitName, setNewHabitName] = useState('')
    const [newHabitColor, setNewHabitColor] = useState('#ffffff')

    return(
        <div>
            <input 
                value={newHabitName}
                onChange={(e) => setNewHabitName(e.target.value)}
                placeholder="New Habit Name"
            />
            <input 
                type='color'
                value={newHabitColor}
                onChange={(e) => setNewHabitColor(e.target.value)}
            />     

            <button onClick={()=>{
                onAddHabit(newHabitName, newHabitColor)
                setNewHabitName('')
                setNewHabitColor('#fffff')
            }}>Submit</button>              
        </div>
    )
}

export default AddHabitForm