import { useEffect, useState } from "react";
import { Period } from "../models/Weather";
import { fetchForecast } from "../services/WeatherApiService";
import './Weather.css'



function WeatherForecast() {
    const [periods,setPeriods] =useState<Period[]>([]);

    useEffect(() => {
        fetchForecast().then(data => {
            setPeriods(data);
        });
    },[]);

    return (
        <div>
            <h2>Weather Forecast for Detroit,MI</h2>
            <ul>
                {periods.map((period,i) =>
                <li key={i}><h3>{period.name}</h3> <p>Temperature: {period.temperature}{period.temperatureUnit}</p> <p><img src={period.icon}/></p> <p>{period.detailedForecast}</p></li>)}

            </ul>
        </div>
    )
}

export default WeatherForecast