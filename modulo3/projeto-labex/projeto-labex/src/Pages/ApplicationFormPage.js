import React from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { goBack } from "../Routes/coordinator"

const StyleApplicationFormPage=styled.div`
display: flex;
text-align: center;
align-items: center;
flex-direction: column;
`

const ApplicationFormPage= ()=> {
    const navigate=useNavigate()

return(
    <StyleApplicationFormPage>
        <h1>Inscreva-se para uma viagem</h1>
        <div>
            <select placeholder="Escolha uma viagem" >Escolha uma viagem
                <option>viagem 1</option>
                <option>viagem 2</option>
                <option>viagem 3</option>
                <option>viagem 4</option>
                <option>viagem 5</option>
            </select> 
            <div>   
                <button onClick={()=>goBack(navigate)}>Voltar</button>
                <button>Enviar Formulário</button>
            </div>
        </div>
    </StyleApplicationFormPage>

)
}
export default ApplicationFormPage