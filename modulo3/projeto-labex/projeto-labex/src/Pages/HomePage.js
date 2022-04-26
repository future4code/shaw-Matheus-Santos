import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyleHomePage=styled.div`
display: flex;
text-align: center;
align-items: center;
flex-direction: column;
`

const HomePage=()=> {

  const navigate = useNavigate()

  const goToListTrips=()=>{
    navigate("ListTripsPage")
  }

  const goToLoginPage=()=>{
    navigate("LoginPage")
  }

  return (
    <StyleHomePage>
      <h1>LabeX</h1>
     <div>
        <button onClick={goToListTrips}>Ver viagens</button>
        <button onClick={goToLoginPage}>Area de Administração</button>
     </div>
    </StyleHomePage>
  );
}
export default HomePage