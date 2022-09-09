import UserList from "../components/UserList";
import styles from "./Homepage.module.scss";

const Homepage = () => {
  const welcomeGIF = "https://cdn.dribbble.com/users/1261045/screenshots/11391612/media/58cd07da8fb87504d054fb1d186abcb0.gif";

  return (
    <div className={styles.homepage__content}>
      <span>
      <h2>Välkommen!</h2>
      </span>
      <div className={styles.homepage__wrapper}>
        <UserList></UserList>
        <div className={styles.homepage__about}>
        <img src={welcomeGIF}alt="Hello and welcome"></img>
        </div>
      </div>
    </div>
    
    );
}
 
export default Homepage;