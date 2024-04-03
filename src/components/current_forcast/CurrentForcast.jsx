export default function CurrentForcast () {
    return (
        <div id="current-forcast-component">
            <form id="searc-bar">
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