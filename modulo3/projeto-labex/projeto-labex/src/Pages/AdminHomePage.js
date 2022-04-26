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

return(
    <StyleAdminHomePage>
       <h1>Painel Adminstrativo</h1>
        <div>
            <button onClick={goBack}>Voltar</button>
            <button>Criar Viagem</button>
            <button>Logout</button>
        </div>
        <div>
            Fulano  
            <button>Excluir</button>
        </div>
    </StyleAdminHomePage>

)
}

export default AdminHomePage