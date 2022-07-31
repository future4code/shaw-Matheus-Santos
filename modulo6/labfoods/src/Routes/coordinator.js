export const goToProfile = (navigate) =>{
    navigate('/profile')
}

export const goToProfileEdit = (navigate,id) =>{
    navigate(`/profile/${id}`)
}


export const goToLogin = (navigate) =>{
    navigate ('/')
}

export const goToFeed = (navigate) =>{
    navigate('/feed')
}

export const goToRestaurant = (navigate, id) =>{
    navigate(`/feed/${id}`)
}


export const goToSignUp = (navigate) =>{
    navigate('/signUp')
}

export const goToSignUpAdress = (navigate) =>{
    navigate ('/signUp/adress')
}

export const goToAdressEdit = (navigate,id) =>{
    navigate(`/adressEdit/${id}`)
}

