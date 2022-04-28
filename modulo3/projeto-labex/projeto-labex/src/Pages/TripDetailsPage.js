import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyleTripDetailsPage=styled.div`
display: flex;
text-align: center;
align-items: center;
flex-direction: column;
`


const TripDetailsPage=()=>{

    const navigate=useNavigate()

    const goBack = ()=>{
        navigate(-1)
    }

    return(
        <StyleTripDetailsPage>
            <h2>Usuario</h2>
            <div>
                <p>Nome</p>
                <p>Descrição:fsdfsdfsfsdfs</p>
                <p>Planeta:Plutão</p>
                <p>Duração:7 Dias</p>
                <p>Data:26/04/2022</p>
                <button onClick={goBack}>Voltar</button>
            </div>
        </StyleTripDetailsPage>
    )
}
export default TripDetailsPage