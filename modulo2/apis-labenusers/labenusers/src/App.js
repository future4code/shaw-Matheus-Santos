import React from "react";
import styled from "styled-components";
import Entrada from "./Components/Entrada";
import SegPagina from "./Components/SegPagina";
import axios from "axios";

class App extends React.Component {
  
  state = {
    name:"",
    email:"",
    body:[]
  }
  
   createUser = () => {
    const body = {
      name:"",
      email:""
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",body,{
      headers:{
        Authorization: "matheusnatal-shaw"
      }
    }
    ).then((resposta) => {
      console.log(resposta.data);
    }).catch((error) => {
      console.log(error.message);
    })
  }

  onChangename = (event) => {
    this.setState({name:event.target.value})
  }

  onClickButton = (event) => {
    
  }

  
  render(){


  return (

    <div>
      <Entrada/>
      <input type="text"  placeholder="Nome de usuário" value={this.props.name} onChange={this.onChangename}/>
      <input type="text" placeholder="e-mail" value={this.props.email} />
            <button type="submit" value={this.onClickButton}>Criar Usuario</button> // 
      <SegPagina/>

    </div>
  );
}
}

export default App;
