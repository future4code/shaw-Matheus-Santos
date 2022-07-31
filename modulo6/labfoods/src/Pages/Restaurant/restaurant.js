import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardProduct from "../../Components/CardProduct/CardProduct";
import CardRestaurant from "../../Components/CardRestaurant/CardRestaurant";
import { BASE_URL } from "../../Constants/url";
import { CardRestaurant, Category, ContainerRestaurant, SectionProductByCategory } from "./styled";

const Restaurant = () =>{
    const { restaurantId } =useParams()
    const [restaurant, setRestaurant] =useState({})
    const [categories, setCategories] =useState([])
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
    useEffect(()=>{
        if(restaurant.products) {
            const newCategories = []
            for( const product of restaurant.products) {
                if(!newCategories.includes(product.category)){
                     newCategories.push(product.category);
                }
            }
            setCategories(newCategories )
        }
    }, [restaurant])
    return(
        <ContainerRestaurant>
            <CardRestaurant>
                <CardRestaurantDetails restaurant = {restaurant} />
                
                {
                    restaurant.products
                    &&
                    categories.map((category)=>{
                        return <SectionProductByCategory>
                            <Category>{category}</Category>
                            {
                                restaurant.products
                                .filter((product)=>{
                                    return product.category === category
                                })
                                .map((product)=>{
                                    return <CardProduct product={product} key={product.id}
                                    />
                                })
                            }
                        </SectionProductByCategory>
                    })
                }

                {/* {
                    restaurant.products && restaurant.products.map((product) => {
                        return <CardProduct product = {product} key={product.id}/>
                    })
                } */}
            </CardRestaurant>
        </ContainerRestaurant>
    )
}
export default Restaurant