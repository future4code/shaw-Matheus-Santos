import React from "react";
import { useForm } from "../../Hooks/useForm";
import { ButtonStyled ,InputMaterial, Main, PassDiv } from "./styled";
import  Visibility  from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import { IconButton } from "@mui/material";

const SingUp = () =>{
    
    const {form, onChange, clean} = useForm(
        {
            "name": "",
            "email": "",
            "cpf": "",
            "password": ""
        }
    )
        // const cpfMask = (value) => {
        //     return value
        //       .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
        //       .replace(/(\d{3})(\d)/, "$1.$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
        //       .replace(/(\d{3})(\d)/, "$1.$2")
        //       .replace(/(\d{3})(\d{1,2})/, "$1-$2")
        //       .replace(/(-\d{2})\d+?$/, "$1") // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
        //   }
        
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const handleClickShowCheckPassword = () =>{
        setShowCheckPassword(!showPassword)
    }
    
    const onSubmitForm= (event) => {
        event.preventDefault()
        console.log(form);

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
            />
                 <InputMaterial
                id="outlined-basic"
                label={"Cpf"}
                name='cpf'
                type={''}
                placeholder={'Digite o seu email'}
                variant="outlined"
                value={(form.value)}
                onChange={onChange}
            />
        <DivPassword>
            <InputMaterial 
            error={checkErrPass}
            helperText={checkErrPass ? errPass:``}
            id="outlined-basic" 
            label="Password"
            type={showPassword ? `password` : `text`}
            variant="outlined"
            placeholder={`Minimo 6 caracteres`}
            value={password}
            onChange={(event)=>setPassword(event.target.value)}
            inputProps={{minLength: 6, title:"A senha deve conter no mínimo 6 caracteres"}}
            required
            />
            <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
        </DivPassword>
        </form>
        </Main>
    )
}
export default SingUp