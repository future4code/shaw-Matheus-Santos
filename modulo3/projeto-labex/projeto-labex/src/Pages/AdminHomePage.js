import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goBack } from "../Routes/coordinator";
import { goToCreateTrip } from "../Routes/coordinator";
import { goToTripDetailsPage } from "../Routes/coordinator";

const StyleAdminHomePage=styled.div`
display: flex;
text-align: center;
align-items: center;
flex-direction: column;
`

const AdminHomePage= ()=> {

    const navigate=useNavigate()


return(
    <StyleAdminHomePage>
       <h1>Painel Adminstrativo</h1>
        <div>
            <button onClick={()=>goBack(navigate)}>Voltar</button>
            <button onClick={()=>goToCreateTrip(navigate)}>Criar Viagem</button>
            <button onClick={()=>goToTripDetailsPage(navigate)}>Logout</button>
        </div>
        <div>
            Fulano  
            <button>Excluir</button>
        </div>
    </StyleAdminHomePage>

)
}

export default AdminHomePage