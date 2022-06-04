import express, { Request, Response } from 'express'
import cors from 'cors'
import { table } from 'console'


const app = express()
app.use(express.json())
app.use(cors())



app.listen(3003, () => {
  console.log('Server is running at port 3003')
})


type User={
  nome:string,
  cpf:number,
  idade:number,
  saldo?:number
}

const userList: User []= [
  {
  nome:"Matheus",
  cpf:1212,
  idade:26,
  saldo:2000
  },{

    nome:"Fulana",
  cpf:11111,
  idade:28,
  saldo:5000

  }
]




//Exercício 1

app.post("/createUser",(req:Request, res:Response)=>{
let errorCode=400
const newUser:User={
  nome:req.body.nome,
  cpf:req.body.cpf,
  idade:req.body.idade,
  saldo:req.body.saldo
}



try{

  if(!newUser || newUser.nome ===""){
errorCode=403
throw new Error("Erro, insira um nome")
}else if(!newUser || newUser.cpf === 0){
  errorCode=403
  throw new Error("Erro,insira um cpf valido")
}else if(!newUser || newUser.idade <18){
  errorCode = 403
  throw new Error("Acesso negado, apenas para maiores de idade.")

}

userList.push(newUser)

}catch(error:any){
res.status(404).send(error.message)
}
res.status(200).send(newUser)
console.table(newUser)
console.table(userList)

})

//Pegar saldo
app.get("/checkBalance/nome",(req:Request, res:Response)=>{
const{nome}=req.params
const checkBalance = userList.filter((usuarios)=>{
if(usuarios.nome==nome){
  return userList
}
res.status(200).send(checkBalance)
})

})