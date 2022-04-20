import { render } from "@testing-library/react";
import axios from "axios";
import React, {BASE_URL, useEffect, useState} from "react";


export default function App() {

  const[pokeList, setPokeList]=useState([])
  const [pokeName, setPokeName]=useState("")

useEffect(()=>{



const atualizaPokename=()=>{
  setPokeName()
}

  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
  .then((res)=>{
    console.log(res.data);
  })
  .catch((err)=>{
    alert(err.response.data)
  }), 
[atualizaPokename]
})


  return (
    
    <div>
     <select onClick={atualizaPokename}> </select>
     <option value={""}>Nenhum</option>
    <p>Nome do Pokemon</p>
    <p>Peso</p>
    <p>Tipo</p>

    </div>
  );
}


