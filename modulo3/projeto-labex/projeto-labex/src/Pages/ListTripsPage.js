import React,{useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goBack} from "../Routes/coordinator";
import {goToApplicationFormPage} from "../Routes/coordinator"
import { BaseUrl } from "../constants/constants";



const StyleListTripsPage=styled.div`
display: flex;
text-align: center;
align-items: center;
flex-direction: column;
`

const ListTripsPage =()=> {
    const navigate = useNavigate()
    const [getTrip,setGetTrip]=useState([])

    useEffect(()=>{
        getTrips()
    },[])


const getTrips = ()=>{
    axios
    .get(`${BaseUrl}trips`)
    .then(res=>{
        setGetTrip(res.data.trips)
    })
    .catch(err=>{
        alert(err.data.trips)
    })
}
        
    const renderTrips = getTrip.map((trip)=>{
        return(
            <div key={trip.id}>
                <p>{trip.planet}</p>
                <p>{trip.name}</p>
                <p>{trip.description}</p>
            </div>

        )
    })
    

return(
    
    <StyleListTripsPage>
        <h1>Lista de Viagens</h1>
        <div>
            <button onClick={()=>goBack(navigate)} >Voltar</button>
            <button onClick={()=>goToApplicationFormPage(navigate)}>Inscrever-se</button>
        </div>
        <div>
          
           {renderTrips}
        </div>
    </StyleListTripsPage>

)
}
export default ListTripsPage