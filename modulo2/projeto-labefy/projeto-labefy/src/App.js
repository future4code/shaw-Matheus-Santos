
import React from "react";
import styled from "styled-components";
import axios from "axios";
import TelaCriarPlaylist from "./Components/TelaCriarPlaylist";
import TelaListaPlaylist from "./Components/TelaListaPlaylist";

  
  
  
  export default class App  extends React.Component {
   
    state ={
      TelaAtual:"criar"
    }

    escolherTela = () => {
      switch (this.state.TelaAtual){
        case "criar":
          return <TelaCriarPlaylist irParaListaPlaylist = {this.irParaListaPlaylist}/>
        case "lista":
        return <TelaListaPlaylist irParaCriarPlaylist = {this.irParaCriarPlaylist}/>
      }
    }

    irParaCriarPlaylist = () => {
      this.setState({TelaAtual:"criar"})
    }

    irParaListaPlaylist = () => {
      this.setState({TelaAtual:"lista"})
    }

    render () {
  
  
    
  
    return (
      
      <div>
        
        {this.escolherTela()}

      </div>
      
    );
    }
  }






//   state = {
//     TelaAtual:"cadastro"
//   }

//   escolheTela = () => {
//     switch(this.state.TelaAtual){
//       case "cadastro":
//         return <TelaCadastro irParaLista={this.irParaLista}/>
//       case "lista":
//         return <TelaPlaylist irParaCadastroPlaylist={this.irParaCadastroPlaylist}/>

//     }
//   }


// irParaCadastroPlaylist = () => {
//   this.setState({TelaAtual:"cadastro"})
// }

// irParaLista = () => {
//   this.setState({TelaAtual:"lista"})
// }


//   render(){

//   return(

// <div>

//     {this.escolheTela()}

// </div>

//   )

//  }

// }

