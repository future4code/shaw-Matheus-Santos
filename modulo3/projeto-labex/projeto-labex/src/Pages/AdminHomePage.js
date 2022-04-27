import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyleAdminHomePage=styled.div`
display: flex;
text-align: center;
align-items: center;
flex-direction: column;
`

const AdminHomePage= ()=> {

    const navigate=useNavigate()

    const goBack=()=>{
        navigate(-1)
    }

    const goToCreateTrip=()=>{
        navigate("/LoginPage/AdminHomePage/CreateTripPage")
    }        
    
    const goToTripDetailsPage=()=>{
        navigate("/LoginPage/AdminHomePage/TripDetailsPage")
    }

return(
    <StyleAdminHomePage>
       <h1>Painel Adminstrativo</h1>
        <div>
            <button onClick={goBack}>Voltar</button>
            <button onClick={goToCreateTrip}>Criar Viagem</button>
            <button onClick={goToTripDetailsPage}>Logout</button>
        </div>
        <div>
            Fulano  
            <button>Excluir</button>
        </div>
    </StyleAdminHomePage>

)
}

export default AdminHomePage