import "./cssFile.css";
import React from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
import WeatherList from "./WeatherList";

class App extends React.Component {
  state = { WA: [], nameOfCity: "", mainWeather: ""};

  componentDidMount() {
    this.onWeatherSubmit("amman");
  }

  onWeatherSubmit = weather => {
    axios
      .get("http://api.openweathermap.org/data/2.5/weather", {
        params: {
          maxResults: 5,
          APPID: "0aef7dd73ce30e8dc6e943798896c95d",
          q: weather
        }
      })
      .then(response => {
        this.setState({
          WA: response.data.weather,
          nameOfCity: weather,
          mainWeather: response.data.main,
          
        });
        
      })
      .catch(e => {
        console.log(e.response);
      });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onWeatherSubmit} />
        <WeatherList WA={this.state.WA} nameOfCity={this.state.nameOfCity} mainWeather={this.state.mainWeather}/>

        <div />
      </div>
    );
  }
}

export default App;
