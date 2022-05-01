import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToListTrips } from "../Routes/coordinator";
import { goToLoginPage } from "../Routes/coordinator";

const StyleHomePage=styled.div`
display: flex;
text-align: center;
align-items: center;
flex-direction: column;
`

const HomePage=()=> {

  const navigate = useNavigate()

  return (
    <StyleHomePage>
      <h1>LabeX</h1>
     <div>
        <button onClick={()=>goToListTrips(navigate)}>Ver viagens</button>
        <button onClick={()=>goToLoginPage(navigate)}>Area de Administração</button>
     </div>
    </StyleHomePage>
  );
}
export default HomePage