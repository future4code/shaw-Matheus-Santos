import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { goBack, goToFeedPage } from "../../Router/coordinator";
// IMPORTS DO MUI ABAIXO
import Container from '@mui/material/Container' 
import CssBaseline from "@mui/material/CssBaseline"; 
import Box from '@mui/material/Box'; 
import Avatar from '@mui/material/Avatar'; 
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'; 
import Typography from '@mui/material/Typography'; 
import TextField from '@mui/material/TextField'; 
import Checkbox from '@mui/material/Checkbox'; 
import FormControlLabel from '@mui/material/FormControlLabel'; 
import Button from '@mui/material/Button'; 
import Grid from '@mui/material/Grid'; 
import Link from '@mui/material/Link'; 
import axios from "axios";
import { baseURL } from "../../constants/urls";




const RegisterPage=()=> {

const [username, setUsername]=useState("")  
const [email, setEmail]=useState("")
const [password, setPassword]=useState("")


  const onChangeUsername=(ev)=>{
    setUsername(ev.target.value)
  }


 const onChangeEmail=(ev)=>{
   setEmail(ev.target.value)
 }

 const onChangePassword=(ev)=>{
   setPassword(ev.target.value)
 }

 useEffect(()=>{
  if(localStorage.getItem("token")!== null){
    goToFeedPage(navigate)
  }
},[])


const handleRegister= async (ev)=>{
  ev.preventDefault()

  const body={
    username:username,
    email:email,
    password:password
  }
  try{
    const response= await axios.post(`${baseURL}/users/singup`, body)
    localStorage.setItem("token",response.data.token)
    {goToFeedPage(navigate)}
  }
  catch(error){
    alert("Falha no login")
  }
 }



  const navigate= useNavigate()
  return (
    <div>
        RegisterPage
        <input type="text" name="nome" placeholder="Nome do usuario"></input>
        <input type="text" name="email" placeholder="Email do usuario"></input>
        <input type="password" name="senha" placeholder="Senha do usuario"></input>

         
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleRegister} noValidate sx={{ mt: 1 }}>
           
          <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={onChangeUsername}
              value={username}
            />
           
        
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={onChangeEmail}
              value={email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Senha"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={onChangePassword}
              value={password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sing Up
            </Button>
            <Grid container>
              <Grid item>
                <Link href="" onClick={()=>goToFeedPage(navigate)} variant="body2">
                  {"Não tem conta?Cadastre-se!"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>




        <button onClick={()=>goBack(navigate)}>Voltar</button>
    </div>
  );
}

export default RegisterPage;
