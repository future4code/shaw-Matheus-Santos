import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../Router/coordinator";


const RegisterPage=()=> {
  const navigate= useNavigate()
  return (
    <div>
        RegisterPage
        <button onClick={()=>goBack(navigate)}>Voltar</button>
    </div>
  );
}

export default RegisterPage;
