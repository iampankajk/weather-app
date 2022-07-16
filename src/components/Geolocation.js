import styles from "./Geolocation.module.css";

const Geolocation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>Geolocation: Delhi, India</p>
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
              <p>8:00 AM</p>
            </div>
          </div>
          <div>
            <p>Total Daylight Hours</p>
            <h1>8 Hours</h1>
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
              <span>sunrise</span>
              <p>8:00 AM</p>
            </div>
          </div>
          <div>
            <p>Total Daylight Hours</p>
            <h1>8 Hours</h1>
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
