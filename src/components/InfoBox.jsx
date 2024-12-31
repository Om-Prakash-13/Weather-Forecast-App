import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import weatherImg from './weatherImage.js';

function InfoBox({data}) {
    let imglink;
    for (let img of weatherImg) {
        if (data.condition.code === img.code) {
          imglink = data.isDay ? img.day : img.night;
          break;
        }
    }
  return (
    <>
      <Card sx={{ maxWidth: 400 }} style={{margin : "3rem auto"}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="150"
            image={imglink}
            alt="green iguana"
          />
          <CardContent style={{display : "flex", flexDirection : "column", alignItems: "center"}}>
            <Typography gutterBottom variant="h5" component="div" style={{display: "flex", alignItems: "center"}}>
              {data.city},&nbsp;{data.country}&nbsp;&nbsp;<img src={data.condition.icon} alt="" height="48px"/>
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }} style={{display : "flex", flexDirection : "column", alignItems: "center"}}>
              <p style={{marginBottom : "0.5rem"}}>Temprature = {data.temp}&deg;C </p>
              <p style={{marginBottom : "0.5rem"}}>Wind Speed = {data.windSpeed} km/h</p>
              <p style={{marginBottom : "0.5rem"}}>humidity = {data.humidity}</p>
              <p style={{marginBottom : "1rem"}}>visibility = {data.visibility} Km.</p>
              <p style={{textAlign : "center"}}>The weather can be described as <i><b>{data.condition.text}</b></i>, and it's feels like {data.fillsLike}&deg;C</p>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default InfoBox;
