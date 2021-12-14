import{useState} from "react";

export function Characters() {
  let [results, setResults] = useState([]);
  let api = "https://rickandmortyapi.com/api/character/"
  fetch(api)
    .then((response) => response.json())
    .then((data)=>setResults(data.results));
  return (
    <div>
      {results.map((personaje, index)=>(
        <>        
        <img src={personaje.image} alt="" />
        <p key={index}>{personaje.name}</p>
        <p key={index}>{personaje.location.name}</p>
        <p key={index}>{personaje.status}</p>
        </>
      ))}
    </div>
  );
}

