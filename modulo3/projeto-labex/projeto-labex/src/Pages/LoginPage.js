import React,{useState, useEffect} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goBack } from "../Routes/coordinator";
import { goToAdminHomePage } from "../Routes/coordinator";
import axios from "axios";

const StyleLoginPage=styled.div`
display: flex;
text-align: center;
align-items: center;
flex-direction: column;
`



const LoginPage=()=> {
    const navigate=useNavigate()
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    


    const onChangeEmail=(ev)=>{
        setEmail(ev.target.value)
    }
    const onChangePassword=(ev)=>{
        setPassword(ev.target.value)
    }

    

    const onChangeSubmitLogin = ()=>{
        
        const body ={
            email:email,
            password:password
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-natal-shaw/login
        `,body)
.then((response)=>{
    console.log(`Deu certo!`, response.data.token)
    localStorage.setItem(`token`, response.data.token)
    {goToAdminHomePage}
})                                               
.catch((error)=>{
    console.log(`Deu errado!`, error.response);
})
}

return(
    <StyleLoginPage>
        <h2>Login</h2>
        <input placeholder="E-mail" onChange={onChangeEmail} ></input>
        <input placeholder="Senha"  onChange={onChangePassword}></input>
            <div>
                <button onClick={()=>goBack(navigate)} >Voltar</button>
               <button onClick={onChangeSubmitLogin}>Enviar teste</button>
            </div>
    </StyleLoginPage>
)

}
export default LoginPage