export default function getCurrentCityName() {
    return new Promise((resolve, reject) => {
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        };

        function success(pos) {
            fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&limit=5&appid=485af0f1332687e14479e1ab60d122cb`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch city data');
                    }
                    return response.json();
                })
                .then(data => {
                    if (data && data.length > 0) {
                        const cityName = data[0].name;
                        resolve(cityName);
                    } else {
                        reject(new Error('Failed to get the current position'));
                    }
                })
                .catch(error => reject(error));
        }

        function error(err) {
            reject(new Error(`ERROR(${err.code}): ${err.message}`));
        }

        try {
            navigator.geolocation.getCurrentPosition(success, error, options);
        } catch (error) {
            reject(error);
        }
    });
}
