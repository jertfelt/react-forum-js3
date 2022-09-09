import styles from "./Footer.module.scss"

const Footer = () => {
  return ( 
  <div className={styles.footer}>
    <span>
    <img src="https://www.tovajertfelt.com/styles/logotype/tova-jertfelt-logo-purple.png"
     alt="jertfelt-logotyp"></img>
      <p> En hemsida av Tova Jertfelt, 2022.</p>
     
    </span>
    <p>
    Studentarbete:
    Inlämningsuppgift #2 i React.</p>
  
  </div> );
}
export default Footer;