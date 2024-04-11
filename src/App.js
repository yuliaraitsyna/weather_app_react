import React, { useEffect, useState } from "react";
import CurrentForcast from "./components/current_forcast/CurrentForcast.jsx";
import DayForcast from "./components/week_forcast/DayForcast.jsx";
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
    const [data, setData] = useState(null);
    
    useEffect(() => {
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        };
        
        async function success(pos) {
            let cityQuery;
            try {
                const response = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&limit=5&appid=485af0f1332687e14479e1ab60d122cb`);
                const data = await response.json();
                if(data && data.length > 0) {
                    cityQuery = data[0].name;
                    console.log(cityQuery);
                }
                else {
                    throw error("Failed to get the current position");
                }
            }
            catch(error) {
                console.log(error.message);
            }
        }
          
        function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }
         
        try {
            navigator.geolocation.getCurrentPosition(success, error, options);
        }
        catch(error) {
            console.log(error);
        }
        
    }, []);

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
