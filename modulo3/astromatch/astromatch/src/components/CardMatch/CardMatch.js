import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
width: 25vw;
height: 60vh;
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;
background-color: lightgray;
border-radius: 20px;
img{
    margin-top: 30px;
    width: 100%;
    height: 200px;
}
`

function CardMatch (props){
   return(

    <MainContainer>
    <img src={props.propsProfile.photo}/>
    <h1>{props.propsProfile.name}</h1>
    <p>{props.propsProfile.bio}</p>
    <button>Clear</button>
     </MainContainer>
     

   )
}

export default CardMatch