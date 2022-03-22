import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import Styled from 'styled-components'



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesarSidePart&accessoriesType=Blank&hairColor=Brown&facialHairType=BeardLight&facialHairColor=Brown&clotheType=BlazerSweater&eyeType=Side&eyebrowType=UpDownNatural&mouthType=Serious&skinColor=Light'
          />" 
          nome="Matheus Natal Santos" 
          descricao="Oi, eu sou o Matheus Natal, um professor de educação física e estudante de programação,atualmente me preparando para me tornar um desenvolvedor Web Full Stack"
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/626/626013.png" 
          texto="Ver mais"
        />

<CardPequeno 
          imagem="https://cdn-icons.flaticon.com/png/512/2504/premium/2504727.png?token=exp=1647971468~hmac=cecdfb8c58dda8a800731214f6bf1456" 
          titulo="Email:" 
          info= "mnatalsantos@hotmail.com"
        />

<CardPequeno 
          imagem="https://cdn-icons-png.flaticon.com/512/252/252025.png" 
          titulo="Endereço:" 
          info= "Ilha de galápagos, terceiro pinguin a esquerda."
        />

      </div>
      
      
      
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao=" A 2 anos treinador de atletas de fisiculturismo e Coach de Crossfit" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  
  );
}

export default App;
