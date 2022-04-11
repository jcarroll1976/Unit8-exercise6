export interface WeatherResponse {
    properties: Properties;
}

export interface Properties {
    periods: Period[];
}

export interface Period {
    name:string;
    isDaytime:boolean;
    temperature:number;
    temperatureUnit:string;
    icon:string;
    shortForecast:string;
    detailedForecast:string;
}