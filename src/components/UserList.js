import styles from "../views/Homepage.module.scss";
import styling from "./UserList.module.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserList = ({title, items, }) => {
  

// // //*byter userId:
// useEffect(() => {
//   //nu får jag bara EN, vill ha alla som har userId ==3 tex
//   const objIndex1 = items.findIndex((obj => obj.userId === 3));
//   console.log("user:", items[objIndex1]);
//   items[objIndex1].userId="Örjan Hjalmarsson";
 
// }, [])
  
    // listItems[objIndex1].userId = "Örjan Hjalmarsson";
    // console
  
    // const objIndex2 = listItems.findIndex((obj => obj.id ===2));
    // listItems[objIndex2].userId = "Britta Molin";

    // const defaultObjIndex = items.findIndex((obj => obj.id >=2));
    // items[defaultObjIndex].userId = "Anders Kvarnström";

  

  return (
  <div className={styles.homepage__userlist}>
    <h3 className={styling.userlist__title}>{title}</h3>
    <article className={styling.userlist__grid}>
    {items.map((item) => (
      <Link to="/post/:id"
      key={item.id}>
      <div className={styling.userlist__itempreview}>
        
        <h3>{item.title}</h3>
        <p>Författare: #{item.userId}</p>
  
      </div>
      </Link>
    ))} 
    </article>
  </div>
    );
}
/*kommentar: har inte riktigt fått konverteringen av userName att fungera, men vi lirar med detta så länge*/
export default UserList;