
import React from 'react';
import styled from 'styled-components';


const Root = styled.div`
  text-align: center;
  display:flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background-image:url(https://i.pinimg.com/564x/8e/6b/e9/8e6be91a01ba06f18b9eddfb944b2b42.jpg);
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
  background-color: black;
  
`
const MenssageArea = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  width: 580px;
  height: 100vh;
  padding: 20px;
  color: white;
`
const Msg =styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  span{
  font-weight: bold;
}
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

  
    // controleUsuario: "",
    // controleTexto: "",

  //   mensagens: [
  //     {
  //     controleUsuario: "",
  //     controleTexto: ""
  //     }
  //   ]
  //     valorUsuario:"",
  //     valorInput:""
    
  // }
  // onChangeUser = (event) =>{
  //   this.setState({controleUsuario:event.target.value})
  //   console.log(this.state.controleUsuario);
  // }

  // onChangeTexto = (event) =>{
  //   this.setState({controleTexto:event.target.value})
  //   console.log(this.state.controleTexto);
  // }

  // onClickButton = () =>{
  //     // const listaTexto = [...this.state.controleTexto]
  //     // listaTexto.push(this.state.controleTexto)
  //     // console.log(listaTexto);
  //   this.setState({controleUsuario:""})
  //   this.setState({controleTexto:""})

  // }

  state = {
    zap:[],
    onclick:false,
    valorInputMensagens:"",
    valorInputUsuario:"" ,
  }
  adicionaNome = ()=>{
    const novoZap = {
      mensagem:this.state.valorInputMensagens,
      nome:this.state.valorInputUsuario,
    };
    const novoZaps = [...this.state.zap,novoZap];

    this.setState({zap: novoZaps,valorInputMensagens:"",onclick:true});

  };

  onChangeInputNome =(event)=>{
    this.setState({valorInputUsuario:event.target.value});
  }

  onChangeInputMensagens =(event)=>{
    this.setState({valorInputMensagens:event.target.value});
  }
  
    render(){
                
      let listaDeComponentes;
      if(this.state.onclick) {
        listaDeComponentes = this.state.zap.map((texto)=> {
          return (
            <div>
              <span>{texto.nome}</span>:{texto.mensagem}
            </div>
          );
        })
      }
      
  return (    
    <Root>
      <Container>
        <MenssageArea>
          <Msg>{listaDeComponentes}</Msg>
          </MenssageArea>
         <InputArea>
          <User placeholder='Usuario' onChange={this.onChangeInputNome}  
          value={this.state.valorInputUsuario}/>
          <Text placeholder='Menssagem' onChange={this.onChangeInputMensagens}
          value={this.state.valorInputMensagens}/>
          <Button onClick={this.adicionaNome}>Enviar</Button>
         </InputArea>
      </Container>
    </Root>
  );
 }
}export default App;
