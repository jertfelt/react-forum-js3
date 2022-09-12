import { useParams } from "react-router-dom";
import useFetch from "../components/useFetch";

const IndividualItem = () => {
  const { id } = useParams();
  const {data : comments, isLoading, fetchError} = useFetch("https://jsonplaceholder.typicode.com/comments");
  const {data : item} = useFetch("https://jsonplaceholder.typicode.com/posts");

  return ( 
  <div>
  {fetchError && <div>{fetchError}</div>}
  {isLoading && <div className="loadingMsg">Vänta medans vi laddar sidan...</div>}
  <div>
  {item && 
  <article>
    <h2>Detaljer - {id}</h2>
  
  {comments && <span>
  
  </span>}
  </article>
  
  }
  </div>
  </div> 
  
 );
}
 
export default IndividualItem;