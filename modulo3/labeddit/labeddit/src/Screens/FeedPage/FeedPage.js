import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack, goToPostPage } from "../../Router/coordinator";


const FeedPage=()=> {
  const navigate=useNavigate()
  return (
    <div>
        FeedPage
    <button onClick={()=>goToPostPage(navigate)}>Ir para o post</button>
    <button onClick={()=>goBack(navigate)}>Voltar</button>
    </div>
  );
}

export default FeedPage;
