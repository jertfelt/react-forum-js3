import { useParams } from "react-router-dom";
import useFetch from "../components/useFetch";
import styles from "./IndividualItem.module.scss";

import { useNavigate, useLocation } from "react-router-dom";

const IndividualItem = () => {
  const { id } = useParams();
  const {data : allcomments, isLoading, fetchError} = useFetch("https://jsonplaceholder.typicode.com/comments");
  const {data : postitem} = useFetch("https://jsonplaceholder.typicode.com/posts");

  // console.log(postitem)
  let navigate = useNavigate();
  const backButt = (e) => {
    e.preventDefault();
    navigate(-1)
  }
  //?ALTERNATIV TILL USEPARAMS - skicka state från UserList hit. Egentligen onödig men ville prova båda sätten:
  const location = useLocation();
  // console.log("uselocation:", location)
  const thisItemsId = location.state?.data;
  // console.log("thisItemsId:", thisItemsId)
  // if (thisItemsId === undefined){
  //   console.log("test")
  // }
  //! Om jag använder thisItemsId, alltså state, så fungerar den enbart om jag KLICKAR mig dit. Men om jag manuellt skriver in adressen så syns den inte. Har därför lagt in en if-sats i "thisItem"-filtreringen som plockar upp thisId ist för thisItemsId. Den ena är parameter och den andra är state.
  

let thisId = {id};  
let commentsArray = allcomments.filter(comment => {
  return comment.postId ===Number(thisId.id);
})

let thisItem = postitem.filter(item => {
  if (thisItemsId === undefined){
    return item.id === Number(thisId.id)
  }
  return item.id ===Number(thisItemsId);
})


// console.log("detta id:",thisItem)


  return ( 
  <div>
  {fetchError && <div>{fetchError}</div>}
  {isLoading && <div className="loadingMsg">Vänta medans vi laddar sidan...</div>}
  <div>
  {postitem && 
  <article className={styles.detailspage__container}>
    
    <h2>Detaljer:</h2>
  
    <div className={styles.detailspage__item}
    >
    <div className={styles.detailspage__content}>
     
       {thisItem.map((item) => (
      <div className={styles.detailspage__body}
      key={item.id}>
        <img src="https://i0.wp.com/boingboing.net/wp-content/uploads/2014/05/diet2.jpg?fit=1000%2C677&ssl=1" alt="A stockphoto"></img>
        <h3 className={styles.detailspage__itemTitle}>{item.title}.</h3>
        <h4>{item.body}!</h4>
        
      </div>
    ))} 
      
      {allcomments && 
        <span>
        
       <h4 className={styles.detailspage__title}>Kommentarer:</h4>
      {commentsArray.map((comment) => (
        <div className={styles.detailspage__postcomments} key={comment.id}>
          <h4>{comment.name}</h4>
          <p>{comment.body}</p> 
          <p className={styles.detailspage__email}>Avsändare: {comment.email} 
          </p>
          <p>Betyg: {comment.id/2}</p>
          <hr/>
          </div>
      ))}
      </span>
     
    }
   
     <button onClick={backButt}>Gå tillbaka</button>
    
      </div>
    </div>
  

  </article>
  
  }
  </div>
  </div> 
  
 );
}
 
export default IndividualItem;