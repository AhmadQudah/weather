import "./cssFile.css";
import React from "react";

const WeatherList = props => {
  
  const name=props.nameOfCity;
  const degree = props.mainWeather.temp;
  const Humidity = props.mainWeather.humidity;
  const WA = props.WA.map(weather => {
    return( 
    <div className="weatherDiv" key={weather.id}>
    <label className="nameLabel">Name of city : {name} </label><br/>
    <label className="degreeLabel">Degree : {degree} F</label><br/>
    <label className="humLabel">Humidity : {Humidity}</label><br/>
    <label className="descLabel">Weather description : {weather.description}</label><br></br>
    </div>
    
    );
  });

  return <div className="weather-list">{WA}</div>;
};

export default WeatherList;
