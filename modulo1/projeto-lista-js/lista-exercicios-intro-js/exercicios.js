// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui

let altura = Number(prompt(`Digite aqui a altura`))
let largura = Number(prompt(`Digite a largura`))
alturaElargura = altura * largura
console.log(alturaElargura)
}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

let anoAtual = Number(prompt(`Digite aqui o ano atual`))
let anoDeNascimento = Number(prompt(`Digite aqui o ano do seu nascimento`))
let resultado = anoAtual - anoDeNascimento
console.log(resultado);


}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

let resultado = peso / (altura*altura)
return resultado
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt(`Digite seu nome`)
  let idade = Number(prompt(`Digite sua idade`))
  let email = prompt(`Digite seu email`)
  let usuario = (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  console.log(usuario);

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
let coresFavoritas1 = prompt(`Quais suas cores favoritas`)
let coresFavoritas2 = prompt(`Quais suas cores favoritas`)
let coresFavoritas3 = prompt(`Quais suas cores favoritas`)
let listaCoresFavoritas = [coresFavoritas1, coresFavoritas2, coresFavoritas3]
console.log(listaCoresFavoritas);

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
   
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
let necessidadeVenda = custo / valorIngresso
return necessidadeVenda
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
let tamanho1 = string1.length
let tamanho2 = string2.length
let igualdade = tamanho1 === tamanho2
return igualdade
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
let i = array[0]
return i
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
let comprimento = array.length
return array [comprimento -1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
let comprimento = array.length             
let ultimo = array[comprimento -1]      
primeiro = array[0]                     


array[comprimento -1] = primeiro
array[0] = ultimo

return array


}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
let m1 = string1.toUpperCase()
let m2= string2.toUpperCase()
return m1 === m2 
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}