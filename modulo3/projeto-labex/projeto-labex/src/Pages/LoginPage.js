import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goBack } from "../Routes/coordinator";
import { goToAdminHomePage } from "../Routes/coordinator";

const StyleLoginPage=styled.div`
display: flex;
text-align: center;
align-items: center;
flex-direction: column;
`

const LoginPage=()=> {
    const navigate=useNavigate()

return(
    <StyleLoginPage>
        <h2>Login</h2>
        <input placeholder="E-mail"></input>
        <input placeholder="Senha"></input>
            <div>
                <button onClick={()=>goBack(navigate)} >Voltar</button>
                <button onClick={()=>goToAdminHomePage(navigate)} >Entrar</button>
            </div>
    </StyleLoginPage>
)

}
export default LoginPage