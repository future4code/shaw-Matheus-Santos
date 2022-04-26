import React from "react";
import styled from "styled-components";


const StyleCreateTripPage=styled.div`
display: flex;
text-align: center;
align-items: center;
flex-direction: column;
`

const CreateTripPage=()=>{
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
                <button>Voltar</button>
                <button>Criar Viagem</button>

            </div>
        </StyleCreateTripPage>
    )
}
export default CreateTripPage