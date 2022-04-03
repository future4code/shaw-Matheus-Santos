import React from "react";
import styled from 'styled-components';

const StyleEtapa3 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export default class Etapa3 extends React.Component {

    state = {
        login:false
    }

render(){


    return (
    <StyleEtapa3>
        <div>
            <h2>ETAPA 3-INFORMAÇÕES GERAIS DE ENSINO</h2>
             <p>5.Por que você não terminou um curso de graduação?</p>
             <input type={this.props.value}/>
             <p>6.Você fez algum curso complementar?</p>
                <select>
                    <option value="Nenhum">Nenhum</option>
                    <option value="Curso técnico">Curso técnico</option>
                    <option value="Curso de Inglês"></option>
                </select>
             <button></button>
         </div>
    </StyleEtapa3>     
       );

}
}