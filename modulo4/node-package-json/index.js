// const nomeIdade = {
//    nome:process.argv[2],
//    idade:Number(process.argv[3],)
// }

// const idadeFutura =  nomeIdade.idade +7

// console.log(`Olá ${nomeidade.nome}! Você tem ${nomeidade.idade} anos`),
// console.log(`Olá ${nomeidade.nome}! Você terá ${idadeFutura} daqui a 7 anos`),



const contaTerminal = (query1, query2)=>{
    if(query2 !== Number){
        return console.log(("Informe dados válidos"));
    }else{
        return (
            
            console.log((`Olá ${query1}! Você tem ${query2} anos`)),
            console.log((`Olá ${query1}! Você tem ${query2 + 7} anos`));
        )
        
    }
}

console.log(contaTerminal(process.argv[2],Number(process.argv[3])));
