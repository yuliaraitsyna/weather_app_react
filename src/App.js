import React from "react";
import CurrentForcast from "./components/current_forcast/CurrentForcast.jsx";
import DayForcast from "./components/week_forcast/DayForcast.jsx";
import { useEffect, useState } from "react";
import "./styles/App.css"

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
    const [data, setData] = useState(null);
        useEffect(() => {
            fetch('http://api.weatherapi.com/v1/current.json?key=fd14bf79a3bd4f40981191408240404&q=Minsk&aqi=no')
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
        }, []);
    console.log(data);
    return (
        <div id="App">
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