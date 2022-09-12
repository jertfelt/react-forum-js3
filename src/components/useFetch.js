import { useEffect, useState } from "react"
const useFetch = (url) => {
const [isLoading, setLoading] = useState(true);
const [data, setData] = useState([])
const [fetchError, setFetchError] = useState("");

useEffect(() => {
  //så det inte blir knas med useFetch på andra sidor. abortControll kommer pausa fetchen om vi byter sida jättesnabbt: 
  const abortControll = new AbortController();
  fetch(url, {signal: abortControll.signal}).then(res=>{
    // console.log("response from server:", res);
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
    if (err.name === "AbortError"){
      console.log("Avbruten fetch")
    }
    setFetchError(err.message);
    setLoading(false);
  })
  return () => abortControll.abort();
},[url])

  return ( 
    {data, isLoading, fetchError}
   );
}
 
export default useFetch;