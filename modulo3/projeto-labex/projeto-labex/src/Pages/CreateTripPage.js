import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goBack } from "../Routes/coordinator";
import {useProtectedPage} from "../hooks/useProtectedPage"
import axios from "axios";

const StyleCreateTripPage=styled.div`
display: flex;
text-align: center;
align-items: center;
flex-direction: column;
`


const CreateTripPage=()=>{
    const navigate=useNavigate()
    useProtectedPage()
    // ESTADOS
    const [nome, setNome]=useState("")
    const [data, setData]=useState("")
    const [descricao, setDescricao]=useState("")
    const [duracaoDias, setDuracaoDias]=useState("")
    const [planet, setPlanet]=useState([])

    const onChangeNome=(ev)=>{
        setNome(ev.target.value)
    }


    const onChangedata=(ev)=>{
        setData(ev.target.value)
    }


    const onChangeDescricao=(ev)=>{
        setDescricao(ev.target.value)
    }


    const onChangeDuracaoDias=(ev)=>{
        setDuracaoDias(ev.target.value)
    }

    const onChangeGetPlanet = (ev)=>{
        setPlanet(ev.target.value)
    }


    const onChangeSubmitCriarViagem=(   )=>{
        const token = window.localStorage.getItem('token')
        const body = {
            Nome:nome,
            Data:data,
            Descricao:descricao,
            DuraçãoDias:duracaoDias,
            planeta:planet
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/matheus-natal-shaw/trips
        `,body,{headers:{
                auth:token
        }})
                

    .then((response)=>{
        alert("Viagem cadastrada com sucesso")
        console.log(`Deu certo!`, response.data);
        setNome("")
        setData("")
        setDescricao("")
        setDuracaoDias("")
        setPlanet("")
    })

    .catch((error)=>{
        console.log(`Deu errado!`, error.response);
    })
    }



    // const pegaPlanetA = planet.map((planetas)=>{
    //     return(
    //             <option value={planetas.id}>
    //                  {planetas.name}
    //             </option>
    //     )
    // })

    return(
        <StyleCreateTripPage>
            <h1>Criar Viagem</h1>
            <div>
                <input placeholder="Nome" onChange={onChangeNome} ></input>
                {/* <input placeholder="planeta"onChange={onChangeGetPlanet} ></input> */}

                <select id="planet" name="planet" onChange={onChangeGetPlanet} value={planet}>
                    <option value="mercúrio">Mercúrio</option>
                    <option value="venus">Vênus</option>
                    <option value="marte">Marte</option>
                    <option value="jupiter">Júpiter</option>
                    <option value="saturno">Saturno</option>
                    <option value="urano">Urano</option>
                    <option value="netuno">Netuno</option>
                    <option value="plutao">Sdds Plutão</option>
                </select>
                
                <input placeholder="dd/mm/aaaa" onChange={onChangedata} ></input>
                <input placeholder="Descrição" onChange={onChangeDescricao} ></input>
                <input placeholder="Duração em dias" onChange={onChangeDuracaoDias} ></input>
            </div>
            <div>
                <button onClick={()=>goBack(navigate)}>Voltar</button>
                <button onClick={onChangeSubmitCriarViagem} >Criar Viagem</button>

            </div>
        </StyleCreateTripPage>
    )
}
export default CreateTripPage