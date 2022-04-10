import React from "react";
import styled from "styled-components";
import axios from "axios";

  
  
  
  export default class TelaCriarPlaylist  extends React.Component {
   
    state = {
      inputNomeDaPlaylist:"",
    }



    novoNomeDaPlaylist = (event) => {
      this.setState({
        inputNomeDaPlaylist:event.target.value
      })
    }

      buttonCriarPlaylist = () => {
        
      }
    


    // funcCriarPlaylist = () => {
    //   axios.post ('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body,{
    //     headers: {
    //       Authorization:'matheusnatal-shaw'
    //     }
    //   }).then ((response)=>{
    //     console.log(response.data);
    //   }).catch((error)=>{
    //     console.log(error.response.data);
    //   })

    // }



    render () {
  
  
    
  
    return (
      
      <div>
        
        <button onClick={this.props.irParaListaPlaylist}>Ir para as suas playlists</button>
        <h2>Criar playlist</h2>
        <input 
        placeholder="Nome da playlist"
        onChange={this.novoNomeDaPlaylist}
        value = {this.state.inputNomeDaPlaylist}
        ></input>
        <h2>{this.state.inputNomeDaPlaylist}</h2>
        <button
        onClick={this.novoNomeDaPlaylist}>Criar</button>
      </div>
      
    );
    }
  }