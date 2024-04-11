import React, { useEffect, useState } from "react";
import CurrentForcast from "./components/current_forcast/CurrentForcast.jsx";
import DayForcast from "./components/week_forcast/DayForcast.jsx";
import getCurrentCityName from "./code/openweathermap.js";
import "./styles/App.css";

const DAYS = {
    Mon: 0,
    Tue: 1,
    Wed: 2,
    Thu: 3,
    Fri: 4,
    Sat: 5,
    Sun: 6
};

const App = () => {
    const [currentCityName, setCurrentCityName] = useState(null);
    const [data, setData] = useState(null);
    
    useEffect(() => {
        getCurrentCityName()
            .then(city => {
                setCurrentCityName(city);
            })
            .catch(error => {
                console.error("Error with getting city name: ", error);
            })
    }, []);

    useEffect(() => {
        if(currentCityName) {
            console.log(currentCityName);
        }
    }, [currentCityName])

    return (
        <div id="App">
            <CurrentForcast />
            <div id="week-forcast-container">
                {Object.keys(DAYS).map(day => (
                    <DayForcast
                        key={day}
                        day={day}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
