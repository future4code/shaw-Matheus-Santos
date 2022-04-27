import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goBack } from "../Routes/coordinator";


const StyleCreateTripPage=styled.div`
display: flex;
text-align: center;
align-items: center;
flex-direction: column;
`

const CreateTripPage=()=>{
    const navigate=useNavigate()
  

    return(
        <StyleCreateTripPage>
            <h1>Criar Viagem</h1>
            <div>
                <input placeholder="Nome" ></input>
                <select placeholder="Escolha um planeta" >
                    <option>Planeta 1</option>
                    <option>Planeta 2</option>
                    <option>Planeta 3</option>
                </select>
                
                <input placeholder="dd/mm/aaaa" ></input>
                <input placeholder="Descrição" ></input>
                <input placeholder="Duração em dias" ></input>
            </div>
            <div>
                <button onClick={()=>goBack(navigate)}>Voltar</button>
                <button>Criar Viagem</button>

            </div>
        </StyleCreateTripPage>
    )
}
export default CreateTripPage