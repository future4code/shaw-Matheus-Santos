import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyleLoginPage=styled.div`
display: flex;
text-align: center;
align-items: center;
flex-direction: column;
`

const LoginPage=()=> {
    const navigate=useNavigate()


    const goBack = ()=>{
        navigate(-1)
    }

    const goToAdminHomePage=()=>{
        navigate("../LoginPage/AdminHomePage")
    }

return(
    <StyleLoginPage>
        <h2>Login</h2>
        <input placeholder="E-mail"></input>
        <input placeholder="Senha"></input>
            <div>
                <button onClick={goBack} >Voltar</button>
                <button onClick={goToAdminHomePage} >Entrar</button>
            </div>
    </StyleLoginPage>
)

}
export default LoginPage