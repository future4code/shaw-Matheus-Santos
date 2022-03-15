
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 3));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    //  Sua lógica aqui
    return `No comparador de desigualdade ${a}===${b} é ${a === b}`
}
console.log(checarIgualdade(8,5));

// c-)Faça uma função chamada "verificaSeEMaior"
function verificaSeEMaior (a, b){
    return `No comparador se é maior ${a} > ${b}  é ${a > b}`
}

console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= true
// c-) 'a'==='b'= false
// d-) 'b'>'a'= false
// e-) 0!==null= false


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

const cadastro = () => {
    const usuario = []
    let nomeDoUsuario = prompt(`Diga o seu nome`) 
    let anoDeNascimento = prompt(`Digite o ano em que vocẽ nasceu`)
    let senhaDoUsuario = prompt(`Digite sua senha`)
    let nacionalidade = prompt(`Digite a sua nacionalidade`)
    let idade = 2022 - anoDeNascimento

    
   if(idade >18 && senhaDoUsuario.length > 6 && nacionalidade === "brasileira" ){
    usuario.push(nomeDoUsuario,idade,senhaDoUsuario, nacionalidade)
    console.log("Você cumpre todos os requisitos");
   }else{
       console.log(`Não cumpre todos os requisitos!`);
   }
   
console.log(usuario);
    //  Sua lógica aqui

}
console.log(cadastro());

// Exercício 4-----------------------------------------------------------------------------------------------

const login = () => {
    const login = "labenu"
    const senha = "labenuuu"
    const senhaDigitada = prompt("Digite sua senha")
    

    if(senha === senhaDigitada){
        console.log(`Usuario logado`);
    }else{
        console.log(`Senha inválida`);
    }

    //  Sua lógica aqui

}

console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------

const primeiraDose = () => {

    //  Sua lógica aqui
    let nome = prompt(`Digite seu nome`)
    let vacina = prompt(`Digite sua vacina`)
    let tempo = ""
    let data = `Data de hoje + os dias da sua vacina`


    if (vacina === "Astrazenica" || vacina === "Pfizer"){
        tempo = 90
    }else if (vacina === "Coronavac"){
        tempo = 28
    }
        
        
     console.log(`Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`);

}
console.log(primeiraDose())


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui
    return { ...usuarios, nomeDoUsuario, imunizacao: "completa"} 
}  
console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui
  for(let i = 0; i < usuarios.length; i++){
        if (usuarios[i].imunizacao == "incompleta"){
        console.log(`Olá ${usuarios[i].nome}! Sua imunização está ${usuarios[i].imunizacao}, por favor volte ao postinho para tomar a segunda dose.`)
        }
        } 

}

console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastroDesafio = () => {
    //  Sua lógica aqui
}
console.log(cadastroDesafio());

const loginDesafio = () => {
    //  Sua lógica aqui
}
console.log(loginDesafio());

const primeiraDoseDesafio = () => {
//  Sua lógica aqui
}
console.log(primeiraDoseDesafio())
const segundaDoseDesafio = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

const avisoAosAtrasadosDesafio = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasadosDesafio());