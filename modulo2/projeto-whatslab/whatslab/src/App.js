import './App.css';
// import Areadosite from './Component/Area-do-site';
import { render } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';


const Root = styled.div`
  text-align: center;
  display:flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items:flex-start;
  margin:0px;
  width: 600px;
  height:100vh;
  border: 1px solid black;
  border-radius: 5px;
  background-image:url(https://i.pinimg.com/564x/8e/6b/e9/8e6be91a01ba06f18b9eddfb944b2b42.jpg);
`
const MenssageArea = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  width: 580px;
  height: 100vh;
  padding: 20px;
`
const InputArea = styled.div `
  display: flex;
`

const User = styled.input`
  font-weight: bold;
  width:80px;
  margin-bottom: 2px;
  border-radius: 10px;
`
const Text = styled.input`
  width:450px;
  border-radius: 10px;
`
const Button = styled.button`
  border-radius: 10px;
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
    console.log(this.state.controleTexto);
  }

  onClickButton = () =>{
      // const listaTexto = [...this.state.controleTexto]
      // listaTexto.push(this.state.controleTexto)
      // console.log(listaTexto);
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
