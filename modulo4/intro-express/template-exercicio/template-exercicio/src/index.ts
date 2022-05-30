import express from 'express'
import cors from 'cors'
import { send } from 'process';

const app = express();
app.use(express.json());
app.use(cors());


app.get('/' ,(req,res)=> {
res.send("funcionou a api!")

})

app.listen(3003, function() {
    console.log("Server is running in http://localhost:3003");
});

//Exerício 2
type User={
    id:string | number,
    name:string,
    phone:number,
    email:string,
    website:string
}

//Exercício3

const users : User[] = [
{
    id:1,
    name:"Matheus",
    phone:1234-5555,
    email:"matheus@gmail.com",
    website:"site.com"
},

{
    id:2,
    name:"Matheus2",
    phone:1234-55552,
    email:"matheus2@gmail.com",
    website:"site2.com"
}

]

//Exercício 4

app.get(`/usuarios`,(req,res)=>{

 res.send(users)

})

//Exercicio 5

type User={
    id:string | number,
    title:string,
    body:string,
    userId:string | number
}



//Exercício 6

const posts: Post []=[
    
{
    id:11,
    title:"titulo",
    body:"body",
    userId:Date.now()
},
{
    id:12,
    title:"titulo2",
    body:"body2",
    userId:Date.now()
}

]
//fsdfsfsf
// Exercício 7

app.get("/post",(req,res)=>{
    res.send(posts)
})

//Exercício 8
app.get("/post/:1",(req,res)=>{
    res.send(posts[0])
}) 
