import React from "react";
import TelaCadastro from "./COMPONENTES.jsx/TelaCadastro";
import TelaListaUsuario from "./COMPONENTES.jsx/TelaListaUsuario";

export default class App extends React.Component {
 
  state = {
    TelaAtual:"cadastro"
  }
 
  escolheTela = () => {
    switch(this.state.TelaAtual){
      case "cadastro":
        return <TelaCadastro irParaLista={this.irParaLista}/>
      case "lista":
        return <TelaListaUsuario irParaCadastro={this.irParaCadastro}/>
         
    }
  }


irParaCadastro = () => {
  this.setState({TelaAtual:"cadastro"})
}

irParaLista = () => {
  this.setState({TelaAtual:"lista"})
}


  render(){

  return(

<div>
    
    {this.escolheTela()}
    
</div>

  )

 }

}


