import React from "react";
import { useNavigate } from "react-router-dom";
import { goToFeedPage, goToRegisterPage } from "../../Router/coordinator";



const LoginPage=()=> {
  const navigate=useNavigate()
  return (
    <div>
        LoginPage
      <button onClick={()=>goToRegisterPage(navigate)}>Cadastrar</button>
      <button onClick={()=>goToFeedPage(navigate)}>Feed</button>
    </div>
  );
}

export default LoginPage;
