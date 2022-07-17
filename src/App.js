import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Geolocation from "./components/Geolocation";
import Hour from "./components/Hour";

function App() {
  const [weather, setWeather] = useState("");
  const [currentCity, setCurrentCity] = useState("");

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(success);
    function success(pos) {
      const crd = pos.coords;
      getWeatherOnLocation(crd.latitude, crd.longitude);
    }
  };

  useEffect(() => {
    if (!weather) {
      getLocation();
    }
  });

  const getWeatherOnLocation = async (lat, lon) => {
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=daily&appid=2d1b7d0c1cb8298b08ab15e2f4c3b160`
    );
    let data = await res.json();

    let city = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=c5e7e9d67f7b4965bee9b4b0f2b077d9`
    );
    city = await city.json();
    city = city.results[0].formatted;
    setWeather((prevState) => (prevState = data));
    setCurrentCity(city);
  };

  return (
    <div>
      <Form getWeather={getWeatherOnLocation}></Form>
      <Geolocation data={weather} city={currentCity}></Geolocation>
      <Hour data={weather}></Hour>
    </div>
  );
}

export default App;
