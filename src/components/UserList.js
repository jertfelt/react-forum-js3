import styles from "../views/Homepage.module.scss";
import styling from "./UserList.module.scss";
import { useState } from "react";

const UserList = () => {
  const [listItems, setListItems] = useState([{
    title: "test", 
    body: "tdfasdqa", 
    id:1,
    userId: 2
  },{
    title: "test2", 
    body: "tdfasdqa", 
    id:2,
    userId: 1
  },
]);

  return (
  <div className={styles.homepage__userlist}>
    <article className={styling.userlist__grid}>
    {listItems.map((item) => (
      <div className="item-preview"
      key={item.id}>
        <h2>{item.title}</h2>
        <p>Skriven av användare #{item.userId}</p>
      </div>
    ))}
    </article>
  </div>
    );
}
 
export default UserList;