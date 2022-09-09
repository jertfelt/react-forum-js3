import styles from "../views/Homepage.module.scss";
import styling from "./UserList.module.scss";
import { useEffect, useState } from "react";

const UserList = ({title, items, handleDelete}) => {
  

  useEffect(() => {
    
    
  },[])
  
//*byter userId:
    const objIndex1 = items.findIndex((obj => obj.id === 1));
    items[objIndex1].userId = "Örjan Hjalmarsson";
  
    const objIndex2 = items.findIndex((obj => obj.id ===2));
    items[objIndex2].userId = "Britta Molin";

    // const defaultObjIndex = items.findIndex((obj => obj.id >=2));
    // items[defaultObjIndex].userId = "Anders Kvarnström";

  return (
  <div className={styles.homepage__userlist}>
    <h3 className={styling.userlist__title}>{title}</h3>
    <article className={styling.userlist__grid}>
    { items.map((item) => (
      <div className={styling.userlist__itempreview}
      key={item.id}>
        <h3>{item.title}</h3>
        <p>Författare: {item.userId}</p>
        <button onClick={() => handleDelete(item.id)}>Delete</button>
      </div>
    ))} 
    </article>
  </div>
    );
}
/*kommentar: har inte riktigt fått konverteringen av userName att fungera, men vi lirar med detta så länge*/
export default UserList;