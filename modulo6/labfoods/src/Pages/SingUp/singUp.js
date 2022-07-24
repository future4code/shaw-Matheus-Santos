import React, { useState } from "react";
import { useForm } from "../../Hooks/useForm";
import { ButtonStyled ,InputMaterial, Main, PassDiv } from "./styled";
import  Visibility  from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import { IconButton } from "@mui/material";
import axios from "axios";
import {BASE_URL} from "../../Constants/url"
import { useNavigate } from "react-router-dom";
import { goToSignUpAdress } from "../../Routes/coordinator";

const SingUp = () =>{
    
    const {form, onChange, clean} = useForm(
        {
            "name": "",
            "email": "",
            "cpf": "",
            "password": ""
        }
    )

    const navigate = useNavigate()

        const [confirmPassword,setConfirmPassword] = useState('')
        const [showPass,setShowPass] = useState(false)
        const [showCheckPass,setShowCheckPass] = useState(false)
        const [checkErrPass, setCheckErrPass] = useState(false)


        // const cpfMask = (value) => {
        //     return value
        //       .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
        //       .replace(/(\d{3})(\d)/, "$1.$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
        //       .replace(/(\d{3})(\d)/, "$1.$2")
        //       .replace(/(\d{3})(\d{1,2})/, "$1-$2")
        //       .replace(/(-\d{2})\d+?$/, "$1") // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
        //   }
        
    const handleClickShowPassword = () => {
        setShowPass(!showPass)
    }
    const handleClickShowCheckPassword = () =>{
        setShowCheckPass(!showCheckPass)
    }
    
    const onSubmitForm= (event) => {
        event.preventDefault()

        if(form.password !== confirmPassword){
            setCheckErrPass(true)
        }else{
            setCheckErrPass(false)
            singUpPerson()
            console.log(form);
        }
    }


    const singUpPerson = async() =>{

        await axios.post(`${BASE_URL}/signup`,form)
        .then((res)=>{
            localStorage.setItem('token',res.data.token)
            alert(`boas vindas ${res.data.user.name}`)
            goToSignUpAdress(navigate)
        })
        .catch((err)=>{
            alert(err.response.data.message);
            clean()
            setConfirmPassword('')
        })
    }


    return(

        <Main>Cadastrar
        <form onSubmit={onSubmitForm}>
            <InputMaterial
                id="outlined-basic"
                label={"Nome"}
                name='name'
                type={'text'}
                placeholder={'Digite o seu nome'}
                variant="outlined"
                value={form.name}
                onChange={onChange}
                required
            />
               <InputMaterial
                id="outlined-basic"
                label={"Email"}
                name='email'
                type={'email'}
                placeholder={'Digite o seu email'}
                variant="outlined"
                value={form.email}
                onChange={onChange}
                required
            />
                 <InputMaterial
                id="outlined-basic"
                label={"Cpf"}
                name='cpf'
                type={'text'}
                placeholder={'Digite o seu cpf'}
                variant="outlined"
                value={(form.cpf)}
                onChange={onChange}
                required
            />

        <PassDiv>
            <InputMaterial 
            id="outlined-adornment-password"
            label={'Password'}
            name='password'
            type={ showPass  ? 'text' : 'password'}
            placeholder={'minimo 6 caracteres'}
            inputProps={{minLength: 6, title: "A senha deve conter no mínimo 6 dígitos"}}
            value={form.password}
            onChange={onChange}
            required
        />

            <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPass ? <Visibility /> : <VisibilityOff />}
                </IconButton>
        </PassDiv>
        <PassDiv>
            <InputMaterial 
            error={checkErrPass}
            helperText={checkErrPass ? 'Deve ser a mesma que a anterior.':''}
            id="outlined-adornment-password" 
            label={'Confirmar'}
            type={showCheckPass ? `text` : `password`}
            placeholder={`Minimo 6 caracteres`}
            inputProps={{minLength: 6, title:"A senha deve conter no mínimo 6 caracteres"}}
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
            required
            />

            <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowCheckPassword}
                  edge="end"
                >
                  {showCheckPass ? <Visibility /> : <VisibilityOff />}
                </IconButton>
             </PassDiv>
                <ButtonStyled type="submit">Entrar</ButtonStyled>
            </form>
        </Main>
    )
}
export default SingUp