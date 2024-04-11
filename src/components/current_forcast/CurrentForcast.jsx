import { useEffect, useState } from "react"
import "../../styles/current_forcast.css"
export default function CurrentForcast () {
    function getRequestData() {
        
    }
    return (
        <div id="current-forcast-container">
            
            <form id="search-bar">
                <input type="search" placeholder="Find location"></input>
                <button type="submit"></button>
            </form>
            <img src=""></img>
            <span>Temperatue</span>
            <div id="info">
                <span>Wind</span>
                <span>Humidity</span>
                <span>UV</span>
            </div>
            <p>Location</p>
        </div>
    )
}