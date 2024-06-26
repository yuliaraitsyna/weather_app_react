# Weather App React
React app based on Weather API

## Technologies
### Webpack
- webpack: module bundler
- webpack-cli: command-line interface
- webpack-server-dev: live reload
- html-webpack-plugin: html for webpack bundlers
### Babel
Transpiler for JavaScript code.
- babel-loader: transpiles JS
- @babel/preset-react: contains presets for React plugins
- @babel/preset-env: presets for JavaScript to use in different environments
#### Polyfill Core JS
Used to adapt to browser versions and JS versions.
### React
The app is based on react components listed in structure.
#### Hooks
`use State` `useEffect`

## APIs
### [Geolocation API](https://developers.google.com/maps/documentation/geolocation/overview?hl=ru)
Used to get latitude and longitude of the current user's position.
### [OpenWeather API](https://openweathermap.org/api/geocoding-api)
Geocoding API for reverse geocoding to get current city name.
### [Weather API](https://www.weatherapi.com/api-explorer.aspx#forecast)
Free weather API to get current and week forcast.

## Functionality
<img src="https://github.com/yuliaraitsyna/weather_app_react/blob/development/doc/weather_app.png" alt="Weather App">

## Styles
Implemented animation for loading. It apears when the current location is being calculated and current city name being fetched.
Implemented error handling page that uploads when any error occures.

## How to run
Install dependencies (from Technologies section). 
Than run this in terminal:
~~~
npm start
~~~
