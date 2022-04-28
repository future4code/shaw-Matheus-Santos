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
    
    const enviar = ()=>{

    
const body ={
    email:email,
    password:password
}
axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-natal-shaw/login
`)
.then((res)=>{
    console.log(`Deu certo!`, res.data)
})
.catch((err)=>{
    console.log(`Deu errado!`, err.data);
})
}
return(
    <StyleLoginPage>
        <h2>Login</h2>
        <input placeholder="E-mail"></input>
        <input placeholder="Senha"></input>
            <div>
                <button onClick={()=>goBack(navigate)} >Voltar</button>
               <button onClick={enviar}>Enviar teste</button>
                {/* <button onClick={()=>goToAdminHomePage(navigate)} >Entrar</button> */}
            </div>
    </StyleLoginPage>
)

}
export default LoginPage