import React from "react";
import styled from 'styled-components';


const StyleDespedida = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`


export default class Despedida extends React.Component {

    state = {
        login:false
    }

render(){


    return (
    <StyleDespedida>
        <div>
            <h1>O FORMULÁRIO ACABOU</h1>
             <p>Muito obrigado por participar!Entraremos em contato!</p>
         </div>
         </StyleDespedida>     
       );

}
}