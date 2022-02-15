//const a = 18
//const b = 19
// console.log("O primeiro número é igual que o segundo?", a === b )
// console.log("O primeiro número é diferente que o segundo?", a !== b)
// console.log("O primeiro número é maior que o segundo?", a > b)
// console.log("O primeiro número é menor que o segundo?", a < b)

// const habilitada = true
// const maiorDeIdade = false
// const estudante = true



// console.log(!maiorDeIdade && estudante && habilitada)



// receber o nome 
// receber o ano de nascimento
// receber o ano atual 
// checar se é maior ou menor de idade 
// mostrar na tela

const nome = prompt("Digie o seu nome")
 const anoNasc = prompt ("Digite o ano em que vocẽ nasceu")
  const anoAtual = prompt("Digite o ano que estamos") 
   let idade = anoAtual - anoNasc
    let maiorDeIdade = idade >= 18  
     let idadeFutura = 2050 - anoNasc 
    console.log("nome",nome)
  console.log("idade", idade)
 console.log("É maior de idade", maiorDeIdade)
console.log ("idade em 2050", idadeFutura)

