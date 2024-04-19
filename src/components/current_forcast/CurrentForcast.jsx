import { useEffect, useState } from "react"
import "../../styles/current_forcast.css"
export default function CurrentForcast (props) {
    console.log(props);
    return (
        <div id="current-forcast-container">
            <form id="search-bar">
                <input type="search" placeholder="Find location"></input>
                <button type="submit"></button>
            </form>
            <img id="current-forcast-icon" name="current-forcast" src={props.data.icon}></img>
            <span id="temperature-display" name="temperature"><img id="temp_c-img"></img>{props.data.temp_c}</span>
            <div id="info">
                <span id="wind-speeed-display" name="wind-speed"><img id="wind_speed-img"></img>{props.data.wind_speed}</span>
                <span id="humidity-display" name="himidity"><img id="humidity-img"></img>{props.data.humidity}</span>
                <span id="uv-display" name="uv"><img id="uv-img"></img>{props.data.uv}</span>
            </div>
            <p id="location-display" name="location"><img id="location-img"></img>{props.data.location}</p>
        </div>
    )
}