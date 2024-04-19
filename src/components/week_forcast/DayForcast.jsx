import "../../styles/day_forcast.css"
export default function DayForcast(props) {
    console.log(props)
    function getDayFromDate(dateStr) {
        const [year, month, day] = dateStr.split('-');
        return parseInt(day, 10);
    }
    return(
        <div id="day-forcast-container">
            <span>{getDayFromDate(props.data.date)}</span>
            <img src= {props.data.day.condition.icon}></img>
            <span>{props.data.day.avgtemp_c}</span>
        </div>
    )
}