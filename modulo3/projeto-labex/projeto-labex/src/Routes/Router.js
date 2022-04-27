import React from "react"
import AdminHomePage from "../Pages/AdminHomePage";
import ListTripsPage from "../Pages/ListTripsPage";
import HomePage from "../Pages/HomePage";
import ApplicationFormPage from "../Pages/ApplicationFormPage";
import LoginPage from "../Pages/LoginPage";
import CreateTripPage from "../Pages/CreateTripPage";
import TripDetailsPage from "../Pages/TripDetailsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";



export const Router = ()=>{
return(
<BrowserRouter>
    <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="LoginPage/AdminHomePage" element={<AdminHomePage/>}/>
        <Route path="ListTripsPage/ApplicationFormPage" element={<ApplicationFormPage/>}/>
        <Route path="LoginPage/AdminHomePage/CreateTripPage" element={<CreateTripPage/>}/>
        <Route path="ListTripsPage" element={<ListTripsPage/>}/>
        <Route path="LoginPage" element={<LoginPage/>}/>
        <Route path="LoginPage/AdminHomePage/TripDetailsPage" element={<TripDetailsPage/>}/>

    </Routes>
</BrowserRouter>

)

}