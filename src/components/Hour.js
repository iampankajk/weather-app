import styles from "./Hour.module.css";
const Hour = ({ data }) => {
  if (data) {
    data = data.hourly.map((item) => {
      let date = new Date(item.dt * 1000).toTimeString();
      date = date.split(":");
      +date[0] >= 12
        ? (date = date[0] + ":" + date[1] + " PM")
        : (date = date[0] + ":" + date[1] + " AM");

      let temp = (item.temp - 273).toFixed(1) + "°C";
      return {
        time: date,
        temp: temp,
        icon: item.weather[0].icon,
        id: Math.random(100).toString(),
      };
    });
    data = data.slice(0, 6);
  }

  let item = data ? (
    data.map((item) => {
      return (
        <div key={item.id}>
          <div>
            <img
              src={`http://openweathermap.org/img/w/${item.icon}.png`}
              alt={item.icon}
            ></img>
          </div>
          <div>
            <h4>{item.temp}</h4>
          </div>
          <div>
            <p>{item.time}</p>
          </div>
        </div>
      );
    })
  ) : (
    <p>Data is Loading....</p>
  );

  return <div className={styles.container}>{item}</div>;
};

export default Hour;
