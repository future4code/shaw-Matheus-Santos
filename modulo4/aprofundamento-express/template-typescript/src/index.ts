import * as express from 'express'
import * as cors from 'cors'
import { send } from 'process';

const app = express();
app.use(express.json());
app.use(cors());

//Exercício 1
app.get('/ping' ,(req,res)=> {
res.send("Pong 🏓")
})

app.listen(3003, function() {
    console.log("Server is running in http://localhost:3003");
});