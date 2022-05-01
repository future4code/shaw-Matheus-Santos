import { useNavigate } from "react-router-dom";

export const goBack=(navigate)=>{
    navigate(-1)
}

export const goToCreateTrip=(navigate)=>{
    navigate("/LoginPage/AdminHomePage/CreateTripPage")
}        

export const goToTripDetailsPage=(navigate)=>{
    navigate("/LoginPage/AdminHomePage/TripDetailsPage")
}

export const goToListTrips=(navigate)=>{
    navigate("ListTripsPage")
  }

  export const goToLoginPage=(navigate)=>{
    navigate("LoginPage")
  }

  export const goToAdminHomePage=(navigate)=>{
    navigate("../LoginPage/AdminHomePage")
}

export const goToApplicationFormPage=(navigate)=>{
    navigate("/ListTripsPage/ApplicationFormPage")
}


