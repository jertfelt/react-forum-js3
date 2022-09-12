import UserList from "../components/UserList";
import styles from "./Homepage.module.scss";
import { useState, useEffect } from "react";
import useFetch from "../components/useFetch";
const Homepage = () => {
  //data: listItems - jag döper om data till listItems för att tydliggöra
const {data : listItems, isLoading, fetchError} = useFetch("https://jsonplaceholder.typicode.com/posts")

const checkOption = (id) => {}

const welcomeGIF = "https://cdn.dribbble.com/users/1261045/screenshots/11391612/media/58cd07da8fb87504d054fb1d186abcb0.gif";

  return (
    <div className={styles.homepage__content}>
      <span>
      <h2>Välkommen!</h2>
      </span>
      {fetchError && <div>{fetchError}</div>}
      {isLoading && <div className="loadingMsg">Vänta medans vi laddar sidan...</div>}
      <div className={styles.homepage__wrapper}>
        <div className={styles.homepage__userlistcontainer}>
       
        {listItems && 
        <UserList
        items= {listItems}
        title="Alla poster:"
        ></UserList>}
        
        {/*även detta ska renderas i en loop: */}
        {!isLoading && 
        <>
        <UserList
        items= {listItems.filter((item) => (item.userId === 1))}
        title="Inlägg skrivna av #1"
        >
        </UserList> 
        {/* <UserList
        items= {listItems.filter((item) => (item.userId === 2))}
        title="Enbart skrivna av #2"
        ></UserList> 
         <UserList
        items= {listItems.filter((item) => (item.userId === 3))}
        title="Enbart skrivna av #3"
        ></UserList>  */}
      </>}
        </div>
        <div className={styles.homepage__about}>
        <img src={welcomeGIF}alt="Hello and welcome"></img>
        <div>
         
    
          <span>
          <h4>Filtrering:</h4>
            <select onClick={(checkOption)}>
              {/* Rendera ut i en foreach-loop */}
              <option onChange={(e) => e.target.value} 
              value="">Välj en:</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">2</option>
              <option value="4">2</option>
              <option value="5">2</option>
              <option value="6">2</option>
              <option value="7">2</option>
              <option value="8">2</option>
              <option value="9">2</option>
              <option value="10">2</option>
            </select>
            
            </span>
          
        </div>
        </div>
        
      </div>
    </div>
    
    );
}
 
export default Homepage;