import UserList from "../components/UserList";
import styles from "./Homepage.module.scss";
import useFetch from "../components/useFetch";
import SelectFilter from "../components/SelectFilter";
import { useState } from "react";

const Homepage = () => {
const {data : listItems, isLoading, fetchError} = useFetch("https://jsonplaceholder.typicode.com/posts")
const [selected, setSelected] = useState("");
const [showFilter, setShowFilter] = useState(false);
const [showAll, setShowAll] = useState(true);

const checkOption =(e)=>{
  setSelected(e.target.value)
  setShowFilter(true);
  setShowAll(false);
  if(e.target.value ==="showMeAll"){
    setShowFilter(false);
    setShowAll(true);
  }
  }

const welcomeGIF = "https://cdn.dribbble.com/users/1261045/screenshots/11391612/media/58cd07da8fb87504d054fb1d186abcb0.gif";


  return (
    <div className={styles.homepage__content}>
      {fetchError && <div>{fetchError}</div>}
      {isLoading && <div className="loadingMsg">Vänta medans vi laddar sidan...</div>}
      <div className={styles.homepage__wrapper}>
        <div className={styles.homepage__userlistcontainer}>

        {showAll && 
        <UserList
        items= {listItems}
        title="Alla inlägg:"
        ></UserList>}
        
        {showFilter && 
        <>
        <UserList
        items= {listItems.filter((item) => (item.userId === Number(selected)))}
        title={`Inlägg skrivna av författare #${selected}`}
        >
        </UserList> 
        
      </>}
      {/* </InfiniteScroll> */}
        </div>
        <div className={styles.homepage__about}>
        <img src={welcomeGIF}alt="Hello and welcome"></img>
        <div>
          <span className={styles.homepage__filter}>
          <h4>Filtrering:</h4>
          <select onChange={(checkOption)}>
           <option 
              value="">Välj en:</option>
              
            <SelectFilter
             items= {listItems}></SelectFilter>
             <option 
              value="showMeAll">Visa alla!</option>
          </select>
            </span>
            <span className={styles.homepage__aboutTXT}>

              <p>I det här projektet experimenterar jag ännu mer med map, filter och routers.
              Jag har tittat på parametrar, och hur man kan skicka state via Link.
              Jag lärde mig att jag kunde göra en egen hook - useFetch - och har använt den för att slippa upprepa kod. 
              Jag har även tittat på en scroll-funktion, men har inte fått det att fungera.
              Jag har också tittat på hur jag kan konvertera userId till namn - tex 1 till "Håkan". 
              Jag har också testat CSS-moduler(sass). Jag har tittat väldigt hastigt på att göra hemsidan responsiv.
              </p>
            </span>
        </div>
        </div>
        
      </div>
    </div>
    
    );
}
 
export default Homepage;