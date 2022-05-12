import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../Router/coordinator";


const PostPage=()=> {
  const navigate=useNavigate()
  return (
    <div>
        PostPage
        <button onClick={()=>goBack(navigate)}>Voltar</button>
    </div>
  );
}

export default PostPage;
