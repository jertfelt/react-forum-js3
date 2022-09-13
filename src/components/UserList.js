import styles from "../views/Homepage.module.scss";
import styling from "./UserList.module.scss";
import { Link} from "react-router-dom";



const UserList = ({title, items, }) => {



  // const [message, setMessage] = useState("");
// const [noArray, setNoArray] = useState(false);


  // useEffect(() => {
  
  //   if(items.length ===0){
  //     setMessage("Den här användaren har inte skrivit något än!")
  //     setNoArray(true);
  //   }
  // },[])

  const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);

  const newList = shuffle(items);


  return (
  <div className={styles.homepage__userlist}>
    <h3 className={styling.userlist__title}>{title}</h3>


    <article className={styling.userlist__grid}>
    {/* {noArray &&
        <div className="message">{message}</div>} */}
    {newList.map((item) => (
      <Link  
      to={`/post/${item.id}`
      }
      state={{data: item.id}}
      key={item.id}>
      <div className={styling.userlist__itempreview}>
        <h3>{item.title}</h3>
        <p>{item.userId}</p>
      </div>
      </Link>
    ))} 
    </article>
  
  </div>
    );
}

export default UserList;