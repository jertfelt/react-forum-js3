import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return ( 
    <nav className={styles.navbar}>
      <h1>ReactForum</h1>
      <span className="links">
        <Link to ="/">Start</Link>
      </span>
    </nav>
    );
}
 
export default Nav; 
