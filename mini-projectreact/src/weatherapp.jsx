import InfoBox from "./infobox"
import SearchBox from './SearchBox.jsx'
import {useState} from "react";
import "./weatherapp.css"
export default function WeatherApp(){
    const [weatherInfo,setweatherInfo]=useState({
        city:"vidisha",
        country: "India",
        feelslike: 26.2,
        humidity: 13,
        localtime: "2025-03-31 23:07",
        name: "Vidisha",
        region: "Madhya Pradesh",
        tempc: 28.2,
        tempf: 82.8,
        windspeed: 10.1,
    })
let updateinfo=(newinfo)=>{
setweatherInfo(newinfo)
}

    return(
        <div style={{textAlign:"center"}}  
           className="weather"
        > 
            <h2>Weather App by Ankit </h2>
             <SearchBox updateinfo={updateinfo}/>
             <InfoBox info={weatherInfo}/>
        </div>
    )
}