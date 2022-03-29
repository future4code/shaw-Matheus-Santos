import React from 'react';
import styled from 'styled-components';

const StyleEnunciado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-sizing: border-box;
    margin:5px;
    
button{
    margin: 5px;
}`


class Enunciado extends React.Component {
  
  state = {
      tarefas:[
        {
            id: Date.now(), 
            texto: 'Texto da primeira tarefa',
            completa: false 
        },
        {
            id: Date.now(), 
            texto:'Texto da segunda tarefa',
            completa: true 
        }

      ],
       

  }


    render(){

  
  return (
    <StyleEnunciado>
    <div>
      <h1>Lista de tarefas</h1>
      <input type={this.props.value}/>
      <button>Adicionar</button><br/>
      <p>Filtro</p>
      <select>
          <option value="">Nenhum</option>
          <option value="">Pendentes</option>
          <option value="">Completas</option>
      </select>
    </div>
    </StyleEnunciado>
  );
}
}

export default Enunciado;
