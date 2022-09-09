import UserList from "../components/UserList";
import styles from "./Homepage.module.scss";

const Homepage = () => {
  return (
    <div className={styles.homepage__content}>
      <h1>Välkommen!</h1>
      <div className={styles.homepage__wrapper}>
        <UserList></UserList>
        <div className={styles.homepage__about}>
        TEST
        </div>
      </div>
    </div>
    );
}
 
export default Homepage;