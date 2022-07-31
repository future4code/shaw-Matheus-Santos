import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardProduct from "../../Components/CardProduct/CardProduct";
import CardRestaurant from "../../Components/CardRestaurant/CardRestaurant";
import { BASE_URL } from "../../Constants/url";
import { CardRestaurant, ContainerRestaurant } from "./styled";

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
                {
                    restaurant.products && restaurant.products.map((product) => {
                        return <CardProduct product = {product} key={product.id}/>
                    })
                }
            </CardRestaurant>
        </ContainerRestaurant>
    )
}
export default Restaurant