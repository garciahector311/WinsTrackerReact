import {useState} from "react"

function Calendar ({calendarData, activeCategory, categoryColors, onDayClick}){
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

    const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate()
    const days = Array.from({ length: totalDays }, (_, i) => i + 1) 
    const monthStart = new Date(currentYear, currentMonth, 1).getDay()
    const emptyDays = Array.from({length:monthStart}, (_,i) => i)
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    return(
        <div >
            <div className="nav-buttons">
                <button id="prev-button"
                    onClick={() =>{
                    if(currentMonth === 0){
                        setCurrentMonth(11)
                        setCurrentYear(currentYear - 1)
                    }else{
                        setCurrentMonth(currentMonth - 1)
                    }
                }}>&#8249;</button>

                <h2 id="month-display">
                {new Date(currentYear, currentMonth, 1).toLocaleString('default', {month : 'long'})} {currentYear}
                </h2>
                <button id="next-button"
                    onClick={() =>{
                    if(currentMonth === 11){
                        setCurrentMonth(0)
                        setCurrentYear(currentYear + 1)
                    }else{
                        setCurrentMonth(currentMonth + 1)
                    }
                }}>&#8250;</button>
            </div>

            <div id="calendar-weekdays" style={{display:'grid', gridTemplateColumns: "repeat(7,1fr)"}}>
                {weekdays.map(day => (
                    <div key={day} className="day-header">{day}</div>
                ))}
            </div>

            <div 
            id="calendar-grid"
            style={{display:'grid', gridTemplateColumns: 'repeat(7,1fr)'}}>
                {emptyDays.map(i => (
                    <div key={`empty-${i}`} className="calendar-square"></div>
                ))}
                {days.map(day => (
                    <div 
                        key={day}
                        className="calendar-square"
                        onClick={() => onDayClick(`${currentYear}-${currentMonth}-${day}`)}
                    >
                        {day}
                        {(calendarData[`${currentYear}-${currentMonth}-${day}`] || []).map(category => (
                            <div
                                key={category}
                                style={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    background: categoryColors[category]  
                                }}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Calendar