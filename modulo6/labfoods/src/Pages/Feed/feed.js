import React, {useEffect, useState} from "react";
import axios from "axios";
import { BASE_URL } from "../../Constants/url";
import { CardsRestaurant, ContainerFeed, InputSearch } from "./styled";
import CardRestaurant from "../../Components/CardRestaurant/CardRestaurant";
import Header from "../../Components/Header/CardRestaurant/Header";


const Feed = () =>{

    const [restaurants, setRestaurants] = useState([])

    const getRestaurants = () => {
        axios.get(`${BASE_URL}/restaurants`,{
            headers:{
                auth:localStorage.getItem("token")
            }
        })
        .then((res) => {
            console.log(res.data);
            setRestaurants(res.data.restaurants)
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    useEffect(()=>{
        getRestaurants()
    }, [])

    

    return(
        <ContainerFeed>
            <Header title={"Ifuture"}/>
            <CardsRestaurant>
            <InputSearch/>
                {
                    restaurants.map((restaurant)=>{
                        return <CardRestaurant 
                        restaurant={restaurant}
                        />
                    })
                }
            </CardsRestaurant>
        </ContainerFeed>
    )
}
export default Feed