import styles from "../views/Homepage.module.scss";
import styling from "./UserList.module.scss";
import { useState } from "react";

const UserList = ({title, items}) => {

  // const items = props.items;
  // console.log(props, items)
  // const items = props.items;
  // const title = props.title;
  

  return (
  <div className={styles.homepage__userlist}>
    <h3 className={styling.userlist__title}>{title}</h3>
    <article className={styling.userlist__grid}>
    { items.map((item) => (
      <div className={styling.userlist__itempreview}
      key={item.id}>
        <h3>{item.title}</h3>
        <p>Skriven av användare #{item.userId}</p>
      </div>
    ))} 
    </article>
  </div>
    );
}
 
export default UserList;