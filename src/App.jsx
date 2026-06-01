import HabitCard from "./HabitCard"
import Calendar from "./Calendar"
import AddHabitForm from "./AddHabitForm"
import { useState, useEffect } from "react"

function App() {
  const [activeCategory, setActiveCategory] = useState(
    JSON.parse(localStorage.getItem('activeCategory')) || 'gym'
  )
  const [calendarData, setCalendarData] = useState(
    JSON.parse(localStorage.getItem('calendarData')) || {}
  )
  const [categoryColors, setCategoryColors] = useState(
    JSON.parse(localStorage.getItem('categoryColors')) || {
      gym: 'green',
      coding: 'blue',
      dj: 'purple'
    }
  )

  const [editMode, setEditMode] = useState(false)

  useEffect(()=>{
    localStorage.setItem('calendarData', JSON.stringify(calendarData))
  }, [calendarData])

  useEffect(()=>{
    localStorage.setItem('categoryColors', JSON.stringify(categoryColors))
  }, [categoryColors])

  useEffect(()=>{
    localStorage.setItem('activeCategory', JSON.stringify(activeCategory))
  }, [activeCategory])

  return (
    <div>
      <h1 style={{textAlign:'center'}}>Wins Tracker</h1>
      <p className="main-description">
        Track your daily wins and build unstoppable momentum. 
        Every day you show up is a mark on your calendar — 
        add your habits below and see how long you can keep the chain going!
      </p>

      <div className="habit-cards">
        {Object.entries(categoryColors).map(([name, color]) => (
          <HabitCard
            key={name}
            name={name}
            color={color}
            activeCategory={activeCategory}
            editMode={editMode}
            onSelect={() => setActiveCategory(name)}
            habitCounter={Object.values(calendarData).filter(categories => categories.includes(name)).length}
            onDeleteHabit={(name) => {
              const { [name]: removed, ...rest } = categoryColors
              setCategoryColors(rest)
              const updatedCalendarData = {}
              Object.keys(calendarData).forEach(day => {
                updatedCalendarData[day] = calendarData[day].filter(c => c !== name)
              })
              setCalendarData(updatedCalendarData)
            }}
          />
        ))}

        <button id="edit-btn" 
          onClick={() => setEditMode(!editMode)}>
          {editMode ? 'Done' : 'Edit'}
        </button>  
      </div>

      <Calendar
        calendarData={calendarData}
        activeCategory={activeCategory}
        categoryColors={categoryColors}
        onDayClick={(day) => {
          const existing = calendarData[day] || []
          const alreadyExists = existing.includes(activeCategory)
          setCalendarData({
            ...calendarData,
            [day]: alreadyExists
              ? existing.filter(c => c !== activeCategory)
              : [...existing, activeCategory]
          })
        }}
      />

      <AddHabitForm
        onAddHabit={(name, color) => {
          setCategoryColors({
            ...categoryColors,
            [name]: color
          })
        }}
      />
    </div>
  )
}

export default App