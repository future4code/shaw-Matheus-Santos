import App from "../App";
import React from "react";
import styled from "styled-components";
import axios from "axios";

const StyleSegPagina = styled.div`
    margin:10px;
`


class SegPagina extends React.Component {
    render(){
  

  
    return (
        <StyleSegPagina>
      <div>
        <label> 
            <button>Voltar</button>
            <br/>
            <h3>Procurar usuário</h3>
            <input type="text"  placeholder="Nome exato para a busca"/>
            <button type="submit">Salvar edição</button>
        </label>
      </div>
      </StyleSegPagina>
    );
  }
  }
  
  export default SegPagina;