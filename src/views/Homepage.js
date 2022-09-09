import UserList from "../components/UserList";
import styles from "./Homepage.module.scss";
import { useState, useEffect } from "react";

const Homepage = () => {
  
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


const handleDelete = (id) => {
const filtered = listItems.filter(item => item.id !== id);
//false -> får inte vara med i filtered! alltså: item.id !== är de som är true, dvs de itemsen utan den specifika id:en blir true. den som har samma id som item.id blir false 
setListItems(filtered);
}




const welcomeGIF = "https://cdn.dribbble.com/users/1261045/screenshots/11391612/media/58cd07da8fb87504d054fb1d186abcb0.gif";

  return (
    <div className={styles.homepage__content}>
      <span>
      <h2>Välkommen!</h2>
      </span>
      <div className={styles.homepage__wrapper}>
        <div className={styles.homepage__userlistcontainer}>
        <UserList
        items= {listItems}
        title="All:"
        handleDelete = {handleDelete}
        ></UserList>
       
        {/* <UserList
        items= {listItems.filter((item) => (item.userId === 1))}
        title="Enbart skrivna av #1"
        ></UserList> */}
        </div>
        <div className={styles.homepage__about}>
        <img src={welcomeGIF}alt="Hello and welcome"></img>
        </div>
        
      </div>
    </div>
    
    );
}
 
export default Homepage;