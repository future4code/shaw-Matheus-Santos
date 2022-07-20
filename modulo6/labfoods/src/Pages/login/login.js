// import { Button } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { Form, Main, ButtonStyled, DivPassword, InputMaterial } from "./styled";

const Login = () =>{

    const [email, setEmail] = useState (``)
    const [password, setPassword] = useState (``)
    const [showPassword, setShowPassword] = useState(false)

    const handleClickShowPassword = () =>{
        setShowPassword(!showPassword)
    }

    const onSubmitLogin = (event) =>{
        event.preventDefault()

        console.log({email, password});
    }

    

    return(
        <Main>
            <p>Entrar</p>
            <Form onSubmit={onSubmitLogin}>
            <InputMaterial 
            id="outlined-basic" 
            label="Email"
            type={`email`}
            variant="outlined" 
            placeholder={`email@email.com`}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            />
            <DivPassword>
            <InputMaterial 
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

            <ButtonStyled type='submit'>Entrar</ButtonStyled>
            </Form>
        </Main>
    )
}
export default Login