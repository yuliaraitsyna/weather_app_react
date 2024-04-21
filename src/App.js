import React, { useEffect, useState } from "react";
import CurrentForcast from "./components/current_forcast/CurrentForcast.jsx";
import DayForcast from "./components/week_forcast/DayForcast.jsx";
import getCurrentCityName from "./code/openweathermap.js";
import { getCurrentForcast, getWeekForcast } from "./code/weather_api.js";
import "./styles/App.css";
import Loading from "./components/status/loading.jsx";
import Error from "./components/status/error.jsx";

const App = () => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
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
                setLoading(false);
            })
            .catch(error => {
                setError(true);
                setLoading(false);
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
                    setError(true);
                    console.error("Failed to get current forecast data: ", error);
                });

            getWeekForcast(currentCityName)
                .then(weekForecastPromise => {
                    setWeekForecast(weekForecastPromise);
                })
                .catch(error => {
                    setError(true);
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
            {loading && <Loading></Loading>}
            {error && <Error></Error>}
            {!loading && !error && (
                <>
                    <CurrentForcast 
                        data={currentForecast}
                        onSubmit={handleSeachBarSubmit}
                    />
                    <div id="week-forcast-container">
                        {weekForecast && weekForecast.map((data, index) => (
                            <DayForcast key={index} data={data} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default App;
