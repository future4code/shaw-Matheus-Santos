import { BrowserRouter,Routes,Route } from "react-router-dom"
import Cart from "../Pages/Cart/cart"
import Feed from "../Pages/Feed/feed"
import Login from "../Pages/login/login"
import Profile from "../Pages/Profile/profile"
import Restaurant from "../Pages/Restaurant/restaurant"
import SingUp from "../Pages/SingUp/singUp"
import SingUpAdress from "../Pages/SingUpAdress/singUpAdress"



const Router = () =>{
return(
<BrowserRouter>
    <Routes>
        <Route index element = {<Login/>}/>
        <Route path='/singUp' element = {<SingUp/>}/>
        <Route path='/singUp/adress' element = {<SingUpAdress/>}/>
        <Route path='/feed' element = {<Feed/>}/>
        <Route path='/feed/:restaurantId' element={<Restaurant/>}/>   
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/cart' element={<Cart/>}/>
        
        

    </Routes>
</BrowserRouter>
)
}

export default Router