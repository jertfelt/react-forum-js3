import { useParams } from "react-router-dom";
import useFetch from "../components/useFetch";
import styles from "./IndividualItem.module.scss";
import { Link } from "react-router-dom";


const IndividualItem = () => {
  const { id } = useParams();
  const {data : allcomments, isLoading, fetchError} = useFetch("https://jsonplaceholder.typicode.com/comments");
  const {data : postitem} = useFetch("https://jsonplaceholder.typicode.com/posts");



let thisId = {id}; 
let commentsArray = allcomments.filter(comment => {
  return comment.postId ===Number(thisId.id);
})
let thisItem = postitem.filter(item => {
  return item.id ===Number(thisId.id);
})
console.log("detta id:",thisItem)

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
      {thisItem.map((item) => (
      <div key={item.id}>
        <h3 className={styles.detailspage__itemTitle}>{item.title}</h3>
        <h4> {item.body}</h4>
      </div>
    ))}
      
      {allcomments && 
        <span>
        
       <h3 className={styles.detailspage__title}>Kommentarer:</h3>
      {commentsArray.map((comment) => (
        <div className={styles.detailspage__postcomments} key={comment.id}>
          <h4>{comment.name}</h4>
          <p>{comment.body}</p> 
          <p className={styles.detailspage__email}>Avsändare: {comment.email} 
          </p>
          </div>
      ))}
      </span>
     
    }
     <span>
      <Link to="/"><button>Tillbaka</button>
      </Link>

      </span>
    </div>
  

  </article>
  
  }
  </div>
  </div> 
  
 );
}
 
export default IndividualItem;