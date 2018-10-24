import axios from 'axios';

const API_KEY = "751e35165bf63bcf9796ff6e71e8d6f1";
const root_url = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city){

    const url = `${root_url}&q=${city},us`;
    const req = axios.get(url);


    return{
        type : FETCH_WEATHER,
        payload : req
    }
}