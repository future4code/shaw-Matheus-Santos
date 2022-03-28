import React from "react";
import styled from 'styled-components';
import Etapa2 from "./Etapa2";

const StyleEtapa1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`
const StyleButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`


export default class Etapa1 extends React.Component {

    state = {
        paginas:""
    };

    functionGo2Page = () => {
        this.setState ({paginas:"etapa2"})
    };

    functionGo3Page

render(){

let proximaPagina;
    switch (this.state.paginas){
        case "etapa2":
         proximaPagina = <Etapa2/>;
        break;
        case "etapa3": /////////

}
    return (
    <StyleEtapa1>
        <div>
            <h2>ETAPA 1-DADOS GERAIS</h2>
                <p>1.Qual o seu nome?</p>
                <input type={this.props.value}/>
                <p>2.Qual a sua idade?</p>
                <input type={this.props.value}/>
                <p>3.Qual o seu email?</p>
                <input type={this.props.value}/>
                <p>4.Qual a sua escolaridade?</p>
            <select>
                <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                <option value="Ensino médio completo">Ensino médio completo</option>
                <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                <option value="Ensino superior completo">Ensino superior completo</option>
            </select>
            <StyleButton>
            <button onClick={this.functionGo2Page}>Próxima etapa</button>
            {proximaPagina}
            </StyleButton>
         </div>
         </StyleEtapa1>
       );
        
}
}
