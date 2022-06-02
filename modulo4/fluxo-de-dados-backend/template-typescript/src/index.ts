import*as express from 'express'
import*as  cors from 'cors'
import { send } from 'process';
import { produtos } from './data';

const app = express();
app.use(express.json());
app.use(cors());

// Exercício 1

app.get("/test", (req, res)=>{
    res.send("Teste feito")
})
app.listen(3003,function(){
    console.log("Server is running");
    
})

//Exercício 3
app.post("/newProduct",(req,res)=>{

    const randomId = Math.floor(Date.now() * Math.random()).toString ()
    const {id, nome, preço}=req.body;

    produtos.push({id:randomId, nome, preço})

    res.send(produtos)
})

//Exercício 4
app.get("/retornaProdutosCadastrados",(req,res)=>{
    res.send(produtos)
})

//Exercício 5
// Não consegui resolver os erros.
app.post("alteraPreço",(req,res)=>{
    const {preço}=req.body
    const novoPreço: any = products.find(
        (preçoProduto:number) => preçoProduto.id == id
    )
    novoPreço.preço=preço
    res.send(novoPreço)
})
