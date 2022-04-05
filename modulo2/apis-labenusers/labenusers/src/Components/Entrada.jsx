import App from "../App";
import React from "react";
import styled from "styled-components";
import axios from "axios";

const StyleEntrada = styled.div`
    margin:10px;
`


class Entrada extends React.Component {
    render(){
  
  
    return (
        <StyleEntrada>
      <div>
        <label> 
            <button>Trocar de tela</button>
            <br/>
        </label>
      </div>
      </StyleEntrada>
    );
  }
  }
  
  export default Entrada;
  