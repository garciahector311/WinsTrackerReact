import { useState } from 'react'


function AddHabitForm({onAddHabit}){
    const [newHabitName, setNewHabitName] = useState('')
    const [newHabitColor, setNewHabitColor] = useState('#ffffff')

    return(
        <div className="add-habit-card">
            <h3>Create a new habit, pick a color!</h3>
            <div id="new-habit-card">
                <input id="new-habit-input"
                    value={newHabitName}
                    onChange={(e) => setNewHabitName(e.target.value)}
                    placeholder="New Habit Name"
                />
                <input id="new-habit-color"
                    type='color'
                    value={newHabitColor}
                    onChange={(e) => setNewHabitColor(e.target.value)}
                />     

                <button id="new-habit-submit"
                    onClick={()=>{
                    onAddHabit(newHabitName, newHabitColor)
                    setNewHabitName('')
                    setNewHabitColor('#fffff')
                }}>Submit</button>       
            </div>
        </div>
    )
}

export default AddHabitForm