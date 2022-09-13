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

// let postsPerPage= listItems.length/5; 
// let postNumber = postsPerPage;
// const [amountPosts, setAmountPosts] = useState([...Array(postsPerPage).keys()]);

// const handleScroll=() => {
// let isAtBottom = document.documentElement.scrollHeight - document.documentElement.scrollTop <= document.documentElement.clientHeight; 
// if (isAtBottom) { 
//   postNumber += postsPerPage;
//   setAmountPosts([...Array(postsPerPage).keys()])
//   console.log("lägger till")
// }}
// window.addEventListener("scroll", handleScroll)

const checkOption =(e)=>{
  setSelected(e.target.value)
  setShowFilter(true);
  setShowAll(false);
  if(e.target.value ==="showMeAll" || e.target.value ==="pickOne"){
    setShowFilter(false);
    setShowAll(true);
  }
  }

  const arrWithNames = listItems.map(item => {
 
    
    if(item.userId === 1){
      return {...item, userId: "Hannes Fredriksson"}
    }
    if(item.userId ===2){
      return {...item, userId: "Fredrika Karlsson"}
    }
    if(item.userId ===3){
      return {...item, userId: "Örjan Hjalmarsson"}
    }
    if(item.userId ===4){
      return {...item, userId: "Teodor Lundell"}
    }
    if(item.userId ===5){
      return {...item, userId: "Kajsa-Lisa Marklund"}
    }
    if(item.userId ===6){
      return {...item, userId: "Beatrice Skata"}
    }
    if(item.userId ===7){
      return {...item, userId: "Brandon Malmström"}
    }
    if(item.userId ===8){
      return {...item, userId: "Leonidas Lundell"}
    }
    if(item.userId ===9){
      return {...item, userId: "Makode Linde"}
    }
    if(item.userId ===10){
      return {...item, userId: "Alice Fux"}
    }
    // else {
    //   return {...item, userId: "Tova Johansson Jertfelt"}
    // }
  
  })



const welcomeGIF = "https://cdn.dribbble.com/users/1261045/screenshots/11391612/media/58cd07da8fb87504d054fb1d186abcb0.gif";


  return (
    <div className={styles.homepage__content}>
      {fetchError && <div>{fetchError}</div>}
      {isLoading && <div className="loadingMsg">Vänta medans vi laddar sidan...</div>}
      <div className={styles.homepage__wrapper}>
        <div className={styles.homepage__userlistcontainer}>

        {showAll && 
        <UserList
        items= {arrWithNames}
        title="Alla inlägg:"
        ></UserList>}
        
        {showFilter && 
        <>
        <UserList
        items= {arrWithNames.filter((item) => (item.userId === (selected)))}
        title={`Inlägg av ${selected}`}
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
              value="pickOne">Välj en:</option>
              
            <SelectFilter
             items= {listItems}></SelectFilter>
             <option 
              value="showMeAll">Visa alla!</option>
          </select>
            </span>
            <span className={styles.homepage__aboutTXT}>

              <p>I det här projektet experimenterar jag ännu mer med map, filter och routers.
              <br/>
             Jag har tittat på parametrar, och hur man kan skicka state via Link.
             <br/>
             Jag har även, utöver uppgifterna, labbat med att filtrera materialet. Samt försökt få den fetchade listan att hamna in en Infinite Scroller.
            <br/>
             Jag lärde mig att jag kunde göra en egen hook - useFetch - och har använt den för att slippa upprepa kod. 
             <br/>
             Jag har också tittat på hur jag kan konvertera userId till namn - tex 1 till "Håkan", och har testat lite olika varianter. Det som krånglar är att jag på något sätt inte får propsen att exporteras från Homepage till SelectFilter, det blir bara undefined för tillfället. Ska felsöka!
             <br/>
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