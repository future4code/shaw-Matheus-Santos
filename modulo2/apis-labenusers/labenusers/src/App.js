import React from "react";
import styled from "styled-components";
import TelaCadastro from "./Components/Entrada";
import TelaListaUsuario from "./Components/TelaListaUsuario";
import axios from "axios";





export default class App extends React.Component {
  
 
    

 
  
  render(){


  return (

    <div>
    <TelaCadastro/>
    <TelaListaUsuario/>
    </div>
  );
}
}



// class App extends React.Component {
  
//   state = {
//     inputName:"",
//     inputEmail:"",
//     inputBusca:""
//   }
  
//     // API-JAVASCRIPT

//    createUser = () => {
//     const body = {
//       name:this.state.inputName,
//       email:this.state.inputEmail
//     }
//     axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",body,{
//       headers:{
//         Authorization: "matheusnatal-shaw"
//       }
//     }
//     ).then((resposta) => {
//       this.setState({inputName:"",inputEmail:""})
      
//       alert("Sucesso")
//     }).catch((error) => {
//       alert("Houve uma falha")
//     })
//   }

//   getUser = () => {
//     axios.get ("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id",{
//       headers:{
//         Authorization:"matheusnatal-shaw"
//       }
//     }).then((resposta)=>{
//       this.setState({inputName: resposta.data})
//       console.log(resposta);
//       alert("foi")
//     })
//   }


// // FUNÇÕES

//   onChangeinputName = (event) => {
//     this.setState({inputName:event.target.value})
//   }

//   onChangeinputEmail = (event) => {
//     this.setState({inputEmail:event.target.value})
//   }

//   onChangeinputBusca = (event) => {
//     this.setState({inputBusca:event.target.value})
//   }
  
//   render(){


//   return (

//     <div>
//       <StyleEntrada>
//       <Entrada/>
//              <input type="text"  placeholder="Nome de usuário" 
//               value={this.state.inputName} 
//               onChange={this.onChangeinputName}/>
//              <input type="text" 
//               placeholder="e-mail" 
//               value={this.state.inputEmail} 
//               onChange={this.onChangeinputEmail} />
//             <button onClick={this.createUser}>Criar Usuario</button>
//       </StyleEntrada>
//       <SegPagina/>
//          <input type="text"  
//          placeholder="Nome exato para a busca"
//          value={this.state.value}
//          onChange={this.onChangeinputBusca} />
//             <button type="submit">Buscar</button>

//     </div>
//   );
// }
// }