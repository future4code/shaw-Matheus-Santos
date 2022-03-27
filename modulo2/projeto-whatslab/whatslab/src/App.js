import './App.css';
// import Areadosite from './Component/Area-do-site';
import { render } from '@testing-library/react';
import React from 'react';
import styledComponents from 'styled-components';


const Root = styledComponents.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`
const Container = styledComponents.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items:flex-start;
  margin:0px;
  width: 600px;
  height:100vh;
  border: 1px solid black;
`
const MenssageArea = styledComponents.div `
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  width: 580px;
  height: 100vh;
  padding: 20px;
`
const InputArea = styledComponents.div `
  display: flex;
`

const User = styledComponents.input`
  font-weight: bold;
  width:80px;
  margin-bottom: 2px;
`
const Text = styledComponents.input`
  width:450px;
`
const Button = styledComponents.button`

`


class App extends React.Component {

  state = {
    controleUsuario: "",
    controleTexto: ""
    
  }
  onChangeUser = (event) =>{
    this.setState({controleUsuario:event.target.value})
    console.log(this.state.controleUsuario);
  }

  onChangeTexto = (event) =>{
    this.setState({controleTexto:event.target.value})
    console.log(this.state.controleTexo);
  }

  onClickButton = () =>{
    this.setState({controleUsuario:""})
    this.setState({controleTexto:""})

  }

    render(){
     
      
  return (    
    <Root>
      <Container>
        <MenssageArea/>
         <InputArea>
          <User placeholder='Usuario' onChange={this.onChangeUser}  
          value={this.state.controleUsuario}/>
          <Text placeholder='Menssagem' onChange={this.onChangeTexto}
          value={this.state.controleTexto}/>
          <Button type='submit' onClick={this.onClickButton}>Enviar</Button>
         </InputArea>
          {/* <Areadosite/> */}
      </Container>
    </Root>
  );
}
}

export default App;
