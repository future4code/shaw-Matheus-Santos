import React from "react";
import styled from "styled-components";
import axios from "axios";

  
  
  
  export default class TelaCriarPlaylist  extends React.Component {
   


    render () {
  
  
    
  
    return (
      
      <div>
        <button onClick={this.props.irParaListaPlaylist}>Ir para as suas playlists</button>
        <h2>Criar playlist</h2>
      </div>
      
    );
    }
  }