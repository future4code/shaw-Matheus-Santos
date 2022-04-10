import React from "react";
import styled from "styled-components";
import axios from "axios";

  
  
  
  export default class TelaListaPlaylist  extends React.Component {
   
    




    render () {
  
  
    
  
    return (
      
      <div>
        <button onClick={this.props.irParaCriarPlaylist}>Criar playlists</button>
        <h2>Suas playlists</h2>
      </div>
      
    );
    }
  }