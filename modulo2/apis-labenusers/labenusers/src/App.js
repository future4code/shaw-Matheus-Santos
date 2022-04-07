import React from "react";
import styled from "styled-components";
import TelaCadastro from "./Components/Entrada";
import TelaListaUsuario from "./Components/TelaListaUsuario";
import axios from "axios";
export default class App extends React.Component {
  
 
    

 
  
  render(){


  return (

    <div>
    <TelaCadastro/>
    <TelaListaUsuario/>
    </div>
  );
}
}