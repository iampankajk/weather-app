import styles from "./Geolocation.module.css";

const Geolocation = ({ data, city }) => {
  console.log(data);
  let sunrise;
  let sunset;
  let temp;
  let icon;
  let humidity;
  let wind_speed;
  let feels_like;
  if (data) {
    sunrise = new Date(data.current.sunrise * 1000).toTimeString();
    sunrise = sunrise.split(":");
    +sunrise[0] >= 12
      ? (sunrise = sunrise[0] + ":" + sunrise[1] + " PM")
      : (sunrise = sunrise[0] + ":" + sunrise[1] + " AM");
    sunset = new Date(data.current.sunset * 1000).toTimeString();
    sunset = sunset.split(":");
    +sunset[0] >= 12
      ? (sunset = sunset[0] + ":" + sunset[1] + " PM")
      : (sunset = sunset[0] + ":" + sunset[1] + " AM");

    temp = (data.current.temp - 273).toFixed(1) + "°C";
    feels_like = (data.current.feels_like - 273).toFixed(1) + "°C";
    humidity = data.current.humidity;
    wind_speed = data.current.wind_speed;
    icon = data.current.weather[0].icon;
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>Geolocation: {city}</p>
      </div>
      <div className={styles.infoBox}>
        <div>
          <div className={styles.time}>
            <img
              src="https://i.ibb.co/vPf9PtP/sunrise-sunset-icon-sun-vector-logo-isolated-white-background-231786-4729-removebg-preview.png"
              className={styles.img}
              alt="sunrise"
            />
            <div>
              <span>sunrise</span>
              <p>{sunrise}</p>
            </div>
          </div>
          <div>
            <div>
              {icon && (
                <img
                  src={`http://openweathermap.org/img/w/${icon}.png`}
                  alt={icon}
                ></img>
              )}
            </div>
            <h1>{temp}</h1>
          </div>
        </div>
        <div>
          <div className={styles.time}>
            <img
              src="https://i.ibb.co/vPf9PtP/sunrise-sunset-icon-sun-vector-logo-isolated-white-background-231786-4729-removebg-preview.png"
              className={styles.img}
              alt="sunrise"
            />
            <div>
              <span>sunset</span>
              <p>{sunset}</p>
            </div>
          </div>
          <div>
            {humidity && <p>humidity: {humidity}%</p>}
            {wind_speed && <p>wind speed: {wind_speed}km/hr</p>}
            {feels_like && <p>temp feels like: {feels_like}</p>}
          </div>
        </div>
      </div>
      <div className={styles.eff}>
        <p>current efficiency</p>
        <p>85%</p>
      </div>
    </div>
  );
};

export default Geolocation;
