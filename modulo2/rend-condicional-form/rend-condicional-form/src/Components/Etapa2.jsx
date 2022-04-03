import React from "react";
import styled from 'styled-components';


const StyleEtapa2 = styled.div`
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


export default class Etapa2 extends React.Component {

    state = {
        login:false
    }

render(){


    return (
    <StyleEtapa2>
        <div>
            <h2>ETAPA 2-INFORMAÇÕES DO ENSINO SUPERIOR</h2>
             <p>5.Qual curso?</p>
             <input type={this.props.value}/>
             <p>6.Qual a unidade de ensino?</p>
             <input type={this.props.value}/>
             <button></button>
         </div>
         </StyleEtapa2>     
       );
    
}
}