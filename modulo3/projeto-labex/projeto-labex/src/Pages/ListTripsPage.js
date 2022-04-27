import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goBack} from "../Routes/coordinator";
import {goToApplicationFormPage} from "../Routes/coordinator"

const StyleListTripsPage=styled.div`
display: flex;
text-align: center;
align-items: center;
flex-direction: column;
`

const ListTripsPage =()=> {

    const navigate = useNavigate()



return(
    
    <StyleListTripsPage>
        <h1>Lista de Viagens</h1>
        <div>
            <button onClick={()=>goBack(navigate)} >Voltar</button>
            <button onClick={()=>goToApplicationFormPage(navigate)}>Inscrever-se</button>
        </div>
        <div>
           <p>Fulano</p>
           <p>Descrição: Bla bla bla....</p>
           <p>Planeta:Plutão.</p>
           <p>Duração: Até deixar de ser um planeta</p>
           <p>Data:26/04/2022</p>
        </div>
    </StyleListTripsPage>

)
}
export default ListTripsPage