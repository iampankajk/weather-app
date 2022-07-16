import styles from './Form.module.css';

const Form = () => {
  return (
        
      <form className={styles.form}>
        <h2>Weather App</h2>
        <img src="https://i.ibb.co/BgVKLzW/cloud.png" alt="cloud" className={styles.cloud}/>
        <div>
          <input className={styles.input}></input>
          <button className={styles.button}>Search</button>
        </div>
      </form>
    
  );
};

export default Form;
