import "./Weather.css";
import Search from "../../assets/weather/search.png";
import Humidity from "../../assets/weather/humidity.png";
import Wind from "../../assets/weather/wind.png";
import Clear from "../../assets/weather/clear.png";
import Cloud from "../../assets/weather/cloud.png";
import Drizzle from "../../assets/weather/drizzle.png";
import Rain from "../../assets/weather/rain.png";
import Snow from "../../assets/weather/snow.png";
import { useState } from "react";

const Weather = () => {
  let api = "e8e8026df472c8a4bc542b6314b54673";

  const [wicon, setWicon] = useState(Cloud);

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");

    if (element[0].value === "") {
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api}`;

    let response = await fetch(url);

    let data = await response.json();

    const humidity = document.getElementsByClassName("humidity_percent");
    const wind = document.getElementsByClassName("wind_rate");
    const temperature = document.getElementsByClassName("weather_temp");
    const location = document.getElementsByClassName("weather_location");

    humidity[0].innerHTML = data.main.humidity + "%";
    wind[0].innerHTML = data.wind.speed + "kmph";
    temperature[0].innerHTML = data.main.temp + " °C";
    location[0].innerHTML = data.name;

    // is else to set the icon for weather

    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWicon(Clear);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setWicon(Cloud);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setWicon(Drizzle);
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setWicon(Drizzle);
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setWicon(Rain);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setWicon(Rain);
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      setWicon(Snow);
    } else {
      setWicon(Clear);
    }
  };

  return (
    <div className="container">
      <div className="top_bar">
        <input type="text" placeholder="Search" className="cityInput" />

        <div className="search_icon">
          <img src={Search} alt="" onClick={search} />
        </div>

        <button className="searchCity" onClick={search}>
          Search
        </button>
      </div>
      <div className="weather_image">
        <img src={wicon} alt="" />
      </div>
      <div className="weather_temp">30°C</div>
      <div className="weather_location">Delhi</div>
      <div className="data_container">
        <div className="element">
          <img src={Humidity} alt="" className="icon" />
          <div className="data">
            <div className="humidity_percent">20%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={Wind} alt="" className="icon" />
          <div className="data">
            <div className="wind_rate">1.08kmph</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
