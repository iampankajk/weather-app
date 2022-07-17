import React, { useRef } from "react";
import styles from "./Form.module.css";

const Form = ({ getWeather }) => {
  const city = useRef("");
  const submitHandler = async (e) => {
    e.preventDefault();
    const enteredCity = city.current.value;
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${enteredCity}&appid=2d1b7d0c1cb8298b08ab15e2f4c3b160`
    );
    let data = await res.json();
    let coord = data.coord;
    getWeather(coord.lat, coord.lon);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <h2>Weather App</h2>
      <img
        src="https://i.ibb.co/BgVKLzW/cloud.png"
        alt="cloud"
        className={styles.cloud}
      />
      <div>
        <input className={styles.input} ref={city}></input>
        <button className={styles.button}>Search</button>
      </div>
    </form>
  );
};

export default Form;
