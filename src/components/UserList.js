import styles from "../views/Homepage.module.scss";
import styling from "./UserList.module.scss";
import { Link} from "react-router-dom";

const UserList = ({title, items, }) => {

  

  return (
  <div className={styles.homepage__userlist}>
    <h3 className={styling.userlist__title}>{title}</h3>
    <article className={styling.userlist__grid}>
    {items.map((item) => (
      <Link  
      to={`/post/${item.id}`
      }
      state={{data: item.id}}
      key={item.id}>
      <div className={styling.userlist__itempreview}>
        <h3>{item.title}</h3>
      </div>
      </Link>
    ))} 
    </article>
  </div>
    );
}
/*kommentar: har inte riktigt fått konverteringen av userName att fungera, men vi lirar med detta så länge*/
export default UserList;