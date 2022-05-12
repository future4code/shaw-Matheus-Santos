import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "../Screens/ErrorPage/ErrorPage";
import FeedPage from "../Screens/FeedPage/FeedPage";
import LoginPage from "../Screens/LoginPage/LoginPage";
import PostPage from "../Screens/PostPage/PostPage";
import RegisterPage from "../Screens/RegisterPage/RegisterPage";


const Router =()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<LoginPage/>} />
                <Route path="register" element={<RegisterPage/>}/>
                <Route path="feed" element={<FeedPage/>} />   
                <Route path="/post/:id" element={<PostPage/>} />
                <Route path="*" element={<ErrorPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router