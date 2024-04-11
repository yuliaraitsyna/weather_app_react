export async function getCurrentForcast(cityQuery) {
    const currentForcast = {
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
            throw new Error('Failed to fetch current forecast data');
        }
        const data = await response.json();
        currentForcast.icon = data.current.condition.icon;
        currentForcast.temp_c = data.current.temp_c;
        currentForcast.uv = data.current.uv;
        currentForcast.humidity = data.current.humidity;
        currentForcast.wind_speed = data.current.wind_kph;
        return currentForcast;
    } catch (error) {
        throw error;
    }
}
