import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../Constants/url";
import { CardRestaurant } from "./styled";

const Restaurant = () =>{
    const { restaurantId } =useParams()
    const [restaurant, setRestaurant] =useState([])
    const getRestaurants = () =>{
        axios.get(`${BASE_URL}/restaurants/${restaurantId}`,{
            headers:{
                auth:window.localStorage.getItem("token")
            }
        })
        .then((res)=>{
            setRestaurant(res.data.restaurant)
            console.log(res.data);
        })
        .catch((err)=>{

        })
    }
    useEffect(()=> {
        getRestaurants()
    }, [])
    return(
        <ContainerRestaurant>
            <CardRestaurant>
                <CardRestaurantDetails restaurant = {restaurant} />
            </CardRestaurant>
        </ContainerRestaurant>
    )
}
export default Restaurant