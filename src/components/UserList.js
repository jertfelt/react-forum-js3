import styles from "../views/Homepage.module.scss";
import styling from "./UserList.module.scss";

const UserList = () => {
  return (
  <div className={styles.homepage__userlist}>
    <article className={styling.userlist__grid}>
      Item
    </article>
  </div>
    );
}
 
export default UserList;