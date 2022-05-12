import React from "react";
import { useNavigate } from "react-router-dom";

export const goToLogin =(navigate)=>{
    navigate ("/")
}

export const goToFeedPage =(navigate)=>{
    navigate("feed")
}

export const goToPostPage =(navigate, id)=>{
    navigate(`/post/${id}`)
}

export const goToRegisterPage =(navigate)=>{
    navigate("register")
}

export const goBack =(navigate)=>{
    navigate(-1)
}
