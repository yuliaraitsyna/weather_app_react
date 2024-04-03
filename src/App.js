import React from "react";
import CurrentForcast from "./components/current_forcast/CurrentForcast.jsx";
import DayForcast from "./components/week_forcast/DayForcast.jsx";
const DAYS = {
    Mon: 0,
    Tue: 1,
    Wed: 2,
    Thu: 3,
    Fri: 4,
    Sat: 5,
    Sun: 6
}
const App = () => {
    return (
        <div>
            <CurrentForcast></CurrentForcast>
            <div id="week-forcast-container">
                {Object.keys(DAYS).map(day => (
                        <DayForcast
                            key={day}
                            day={day}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default App;