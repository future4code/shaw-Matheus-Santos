import '../App.css'
import { render } from '@testing-library/react'


function Areadosite(){

    return (

        <div className='container'>
        <div className='menssage-area'>Area de exibição das mensagens</div>
        <div className='input-area'>
          <input className='user' placeholder='Usuario'></input>
          <input className='text' placeholder='Mensagem'></input> <button className='button' type='submit'>Enviar</button></div>
      </div>       
    )
}

export default Areadosite