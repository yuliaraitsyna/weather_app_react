import React, { useEffect, useState } from "react";
import CurrentForcast from "./components/current_forcast/CurrentForcast.jsx";
import DayForcast from "./components/week_forcast/DayForcast.jsx";
import getCurrentCityName from "./code/openweathermap.js";
import { getCurrentForcast, getWeekForcast } from "./code/weather_api.js";
import "./styles/App.css";

const App = () => {
    const [currentCityName, setCurrentCityName] = useState(null);
    const [currentForecast, setCurrentForecast] = useState(
        {
            location: currentCityName,
            temp_c: null,
            uv: null,
            humidity: null,
            wind_speed: null,
            icon: null
        }
    );
    const [weekForecast, setWeekForecast] = useState(null);
    
    useEffect(() => {
        getCurrentCityName()
            .then(city => {
                setCurrentCityName(city);
            })
            .catch(error => {
                console.error("Error with getting city name: ", error);
            });
    }, []);

    useEffect(() => {
        if(currentCityName) {
            getCurrentForcast(currentCityName)
                .then(currentForecastPromise => {
                    setCurrentForecast(currentForecastPromise);
                })
                .catch(error => {
                    console.error("Failed to get current forecast data: ", error);
                });

            getWeekForcast(currentCityName)
                .then(weekForecastPromise => {
                    setWeekForecast(weekForecastPromise);
                })
                .catch(error => {
                    console.log("Failed to get week forcast data: ", error);
                });
        }
    }, [currentCityName])

    function handleSeachBarSubmit(event) {
        event.preventDefault();
        let cityQuery = event.target.querySelector('input[type="search"]').value.trim();
        setCurrentCityName(cityQuery);
    }

    return (
        <div id="App">
            <CurrentForcast 
                data={currentForecast}
                onSubmit={handleSeachBarSubmit}
            />
            <div id="week-forcast-container">
               {weekForecast && weekForecast.map((data, index) => (
                    <DayForcast key={index} data={data} />
                ))}
            </div>
        </div>
    );
};

export default App;
