import React, {useEffect, useState} from "react";
import axios from "axios";
import { BASE_URL } from "../../Constants/url";
import { BoxInputSearch, CardsRestaurant, ContainerFeed, InputSearch, Menu, MenuItem } from "./styled";
import CardRestaurant from "../../Components/CardRestaurant/CardRestaurant";
import Header from "../../Components/Header/CardRestaurant/Header";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
// import { useGlobal } from "../../Context/Global/GlobalStateContext"


const Feed = () =>{

    useProtectedPage()

    const [restaurants, setRestaurants] = useState([])
    // const { setters, states } = useGlobal()
    const [categoryRestaurant, setCategoryRestaurant] = useState([])
    const [valueCategory, setValueCategory] = useState('')

    const [inputText, setInputText] = useState('')


    const getRestaurants = () => {
        axios.get(`${BASE_URL}/restaurants`,{
            headers:{
                auth:localStorage.getItem("token")
            }
        })
        .then((res) => {
            setRestaurants(res.data.restaurants)
            filterCategory(res.data.restaurants)
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    const filterCategory = (restaurants) => {
        const arrayAux = []
        restaurants.map((res)=>{
            arrayAux.push(res.category)
        })
        const takeOutRepeat = [...new Set(arrayAux)]

        const changeObjectArray = []

        takeOutRepeat.map((category)=>{
            const insertObj = {category,select : false};
            changeObjectArray.push(insertObj)
        })
     setCategoryRestaurant (changeObjectArray)
    }

    const getActiveOrder = () => {
        axios.get(`${BASE_URL}/active-order`,
        {
            headers:{
                auth:window.localStorage.getItem('token')
            }
        })
        .then((res) =>{
            // setters.setOrder(res.data.order)
            const timeCurrent = new Date().getTime()
            setTimeout(()=> {
                getActiveOrder()
                console.log("oi");
            },res.data.order.expiresAt - timeCurrent)
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    useEffect(() => {
        getRestaurants()
        getActiveOrder()
    }, [])

    const filterRestaurant = restaurants
    .filter((restaurant) =>
        inputText ? restaurant.name.toLowerCase().includes(inputText.toLocaleLowerCase()) : true    
    )
    .filter((restaurant) =>
        valueCategory ? restaurant.category.toLocaleLowerCase().includes(valueCategory.toLocaleLowerCase()): true 
    )
    .map((restaurant) => {
        return <CardRestaurant restaurant={restaurant} />
    })
    
    return(
        
        <ContainerFeed>
            {filterRestaurant()}
            <Header title={"Ifuture"}/>
            <BoxInputSearch>
                <InputSearch
                    value={inputText}
                    onChange={(event)=>setInputText(event.target.value)}
                />
            </BoxInputSearch>
            <Menu>
            <MenuItem 
                     onClick={() =>setValueCategory('')}
                         >
                        Todos
                            
                         </MenuItem>
                    {categoryRestaurant.map((category)=>{
                        console.log(category.select);
                        return (
                        <MenuItem 
                            select = {false}
                            onClick={() =>setValueCategory(category.category)}
                            >
                            {category.category}
                         </MenuItem>)
                    })}
                    
            </Menu>
            <CardsRestaurant>
                {
                    filterRestaurant
                }
            </CardsRestaurant>
        </ContainerFeed>
    )
}
export default Feed