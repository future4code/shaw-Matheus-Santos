import React from "react";
import {ButtonStyled, InputMaterial, Main} from './styled'
import { useForm } from "../../Hooks/useForm";
import axios from "axios";
import {BASE_URL} from "../../Constants/url"


const SignUpAdress = () =>{
    
    
    const {form, onChange, clean} = useForm({
        
        "street": "",
        "number": "",
        "neighbourhood": "",
        "city": "",
        "state": "",
        "complement": ""
        
    })
    
    const onSubmitFormAdress = (event) =>{
        event.preventDefault();
        addAdress()
    }

    const addAdress = async () =>{
        const token = localStorage.getItem('token')
        console.log(form);
        console.log(token);
        await axios.put(`${BASE_URL}/address`,form,{
            headers: {
                auth:token
            }
        })
        .then((res)=>{
            console.log(res.data);
        })
        .catch((err)=>{
            console.log(err.response);
        })
    }
    

    return(
        <Main>
            <p>SignUpAdress</p>
           <form onSubmit={onSubmitFormAdress}>
           <InputMaterial
                id="outlined-basic"
                label={"Logradouro"}
                name='street'
                type={'text'}
                placeholder={'Rua / Av'}
                
            />
            <InputMaterial
                id="outlined-basic"
                label={"Numero"}
                name='number'
                type={'number'}
                placeholder={'Numero'}
                variant="outlined"
                value={form.number}
                onChange={onChange}
                required
                
            />
            <InputMaterial
                id="outlined-basic"
                label={"Complemento"}
                name='complement'
                type={'text'}
                placeholder={'Apto / Bloco'}
                variant="outlined"
                value={form.complement}
                onChange={onChange}
                
                
            />
            <InputMaterial
                id="outlined-basic"
                label={"Bairro"}
                name='neighbourhood'
                type={'text'}
                placeholder={'Bairro'}
                variant="outlined"
                value={form.neighbourhood}
                onChange={onChange}
                required
                
            />
            <InputMaterial
                id="outlined-basic"
                label={"Cidade"}
                name='city'
                type={'text'}
                placeholder={'Cidade'}
                variant="outlined"
                value={form.city}
                onChange={onChange}
                required
                
            />
            <InputMaterial
                id="outlined-basic"
                label={"Estado"}
                name='state'
                type={'text'}
                placeholder={'Estado'}
                variant="outlined"
                value={form.state}
                onChange={onChange}
                required
                
            />
                <ButtonStyled type="submit">Salvar</ButtonStyled>

           </form>
            </Main>
    )
}
export default SignUpAdress