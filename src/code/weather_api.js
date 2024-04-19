export async function getCurrentForcast(cityQuery) {
    const currentForecast = {
        location: cityQuery,
        temp_c: null,
        uv: null,
        humidity: null,
        wind_speed: null,
        icon: null
    };

    try {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=fd14bf79a3bd4f40981191408240404&q=${cityQuery}&days=7&aqi=no&alerts=no`);
        if (!response.ok) {
            throw new Error('Failed to fetch current forcast data');
        }
        const data = await response.json();
        currentForecast.icon = data.current.condition.icon;
        currentForecast.temp_c = data.current.temp_c;
        currentForecast.uv = data.current.uv;
        currentForecast.humidity = data.current.humidity;
        currentForecast.wind_speed = data.current.wind_kph;
        return currentForecast;
    } catch (error) {
        throw error;
    }
}


export async function getWeekForcast(cityQuery) {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=fd14bf79a3bd4f40981191408240404&q=${cityQuery}&days=7&aqi=no&alerts=no`);
        if(!response.ok) {
            throw new Error('Failed to fetch week forcast data');
        }
        const data = await response.json();
        return data.forecast.forecastday;
    }
    catch(error) {
        throw error;
    }
}