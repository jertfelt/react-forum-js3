import styles from "./Nav.module.scss";

const Nav = () => {
  return ( 
    <nav className={styles.navbar}>
      <h1>ReactForum</h1>
      <span className="links">
        <a href="/">Start</a>
        <a href="/ny">Skapa</a>
      </span>
    </nav>
    );
}
 
export default Nav; 
