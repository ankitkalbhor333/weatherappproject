
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css"
import {useState} from "react"

export default function SearchBox({updateinfo}){
    
    let [city, setCity]=useState("")
   
    const api_url="http://api.weatherapi.com/v1/current.json?key=2b7367662dd04969b94134811253103&q=India"
    const api_key="2b7367662dd04969b94134811253103"

let getWeatherinfo =async() =>
{
let response=await fetch(`${api_url}?q=${city}&appid=${api_key}`);
let jsonResponse=await response.json();
console.log(jsonResponse)
let result={
    city:city,
    tempc: jsonResponse.current.temp_c ,
    tempf: jsonResponse.current.temp_f,
    humidity: jsonResponse.current.humidity ,
    windspeed: jsonResponse.current.wind_kph,
    feelslike: jsonResponse.current.feelslike_c,
    country:jsonResponse.location.country,
    name:jsonResponse.location.name,
    region:jsonResponse.location.region,
    localtime:jsonResponse.location.localtime,
}
console.log(result)
return result
};
    

let HandleChange=(evt)=>
{
    setCity(evt.target.value)
}
let handleSubmit=async(evt)=>
{  evt.preventDefault()
    console.log(city)
    setCity("");
let newinfo= await getWeatherinfo();
 updateinfo(newinfo)
}
    return (
    <div className="searchbox">
   
    <form onSubmit={handleSubmit}>
    <TextField onChange={HandleChange} value={city} id="city" label="City-Name" variant="outlined" required />
    <br />< br/>
    <Button variant="contained" endIcon={<SendIcon />} type='submit'>
        Search
      </Button>
    </form>
</div>
    )
}