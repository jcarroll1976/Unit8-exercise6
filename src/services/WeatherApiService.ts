import axios from "axios";
import { Period, WeatherResponse } from "../models/Weather";



export function fetchForecast(): Promise<Period[]> {
    return axios.get<WeatherResponse>("https://api.weather.gov/gridpoints/DTX/65,33/forecast")
    .then((response) => {
        return response.data.properties.periods;
    });
}