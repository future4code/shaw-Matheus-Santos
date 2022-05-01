import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goBack } from "../Routes/coordinator";
import axios from "axios";
import {useProtectedPage} from "../hooks/useProtectedPage"

const StyleTripDetailsPage=styled.div`
display: flex;
text-align: center;
align-items: center;
flex-direction: column;
`



export const TripDetailsPage=()=>{
    useProtectedPage()
    useEffect(()=>{
        const token = localStorage.getItem(`token`)
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-natal-shaw/trip/AoTARgByI2yezYU0Msl5
        `, {headers:{
            auth:token
    }})
       
        .then((response)=>{
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error.response);
        })
    })



    const navigate=useNavigate()

    return(
        <StyleTripDetailsPage>
            <h2>Usuario</h2>
            <div>
                <p>Nome</p>
                <p>Descrição:fsdfsdfsfsdfs</p>
                <p>Planeta:Plutão</p>
                <p>Duração:7 Dias</p>
                <p>Data:26/04/2022</p>
                <button onClick={()=>goBack(navigate)}>Voltar</button>
            </div>
        </StyleTripDetailsPage>
    )
}
export default TripDetailsPage