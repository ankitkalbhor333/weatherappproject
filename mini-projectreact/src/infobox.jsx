
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./info.css"
export default function InfoBox({info}){
//    let info ={ 
//     city:"delhi",
// country: "India",
// feelslike: 26.2,
// humidity: 13,
// localtime: "2025-03-31 23:07",
// name: "Vidisha",
// region: "Madhya Pradesh",
// tempc: 28.2,
// tempf: 82.8,
// windspeed: 10.1
//    }
   const initurl="https://images.unsplash.com/photo-1673191898695-8252d409d82c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return (
   
         <div className="infobox">

<div className="cardcontainer">       
             <Card sx={{ maxWidth: 345 }}>
             <CardMedia
               sx={{ height: 140 }}
               image={initurl}
               title="green iguana"
             />
             <CardContent>
               <Typography gutterBottom variant="h5" component="div">
        {info.city}
               </Typography>
               <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
              <p>Temperature:{info.tempc}&deg;C </p>
              <p>Humidity:{info.humidity}</p>
              <p>Region:{info.region}</p>
              <p>WindSpeed:{info.windspeed}</p>
               </Typography>
             </CardContent>
          
           </Card>
           </div>      
</div>
       
    )
}