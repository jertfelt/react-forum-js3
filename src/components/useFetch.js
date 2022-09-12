import { useEffect, useState } from "react"
const useFetch = (url) => {
const [isLoading, setLoading] = useState(true);
// const [listItems, setListItems] = useState([
// ]);
const [data, setData] = useState([])
const [fetchError, setFetchError] = useState("");

useEffect(() => {
  fetch(url).then(res=>{
    console.log("response from server:", res);
    if(!res.ok){
      throw Error("Kunde inte hämta data från servern. Prova igen eller kontakta administratören.")
    }
    return res.json()
  })
  .then((d) => {
    setData(d);
    setLoading(false);
    setFetchError("");
  })
  .catch(err => {
    console.log(err.message);
    setFetchError(err.message);
    setLoading(false);
  })
},[url])

  return ( 
    {data, isLoading, fetchError}
   );
}
 
export default useFetch;