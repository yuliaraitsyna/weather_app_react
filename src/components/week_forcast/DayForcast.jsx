import "../../styles/day_forcast.css"
export default function DayForcast(props) {
    console.log(props)
    return(
        <div id="day-forcast-container">
            <span>{props.data.date}</span>
            <img src= {props.data.day.condition.icon}></img>
            <span>{props.data.day.avgtemp_c}</span>
        </div>
    )
}