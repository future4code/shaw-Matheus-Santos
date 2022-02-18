// Exercicio 1
// a) "10" e "50"
// b) Não imprimiria nada

// Exercício 2 
// a) Essa função transforma todos os textos digitados no prompt
// em lowercase e busca se existe a palavra "cenoura" ele devolve um valor booleano
// true or false, e o console log ira imprimir a frase.

// b) 1- True   2-True     3-False

//Exercícios de escrita de código
// 1)

function Caio(){
    console.log("Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante.")
    

}
Caio()

function receber(nome,idade,cidade,profissao){
 return (`Eu sou ${nome = prompt(`Digite seu nome`)}, tenho ${idade = prompt(`Digite sua idade`)}, 
//   moro em ${cidade = prompt(`Digite sua cidade`)} e sou ${profissao = prompt(`Digite sua profissao`)}.`)

}
console.log(receber());

// 2) a)


function recebaNumeros (n1, n2){
    let soma = n1+n2
return soma

}
n1 = Number(prompt(`Digite seu numero 1`))
n2 = Number(prompt(`Digite seu numero 2`))
    
console.log (recebaNumeros(n1, n2));


// b)

function recebaNumero (n1,n2){

    maiorOuIgual = n1 >= n2
    return maiorOuIgual

}
console.log(recebaNumero (10, 20))


// // c)
function recebaNumero (n1){
let parOuImpar = (n1 % 2 === 0)
return parOuImpar

}

n1= Number(prompt(`Digite seu número`))
console.log(recebaNumero(n1)); 

// d)
function funcaoString (string) {

    let tamanho = string.length
let maiusculo = string.toUpperCase()

console.log(`tamanho da string é ${tamanho} e o tamanho é ${maiusculo}`);


}
funcaoString(`aqui tem qualquer coisa`)

// 3)
// a)

n1 = Number(prompt(`Digite o primeiro número`))
n2 = Number(prompt(`Digite o segundo número`))
function funcaoSoma (n1, n2){
    soma =n1 + n2
    return soma
}
console.log(funcaoSoma(n1, n2));



n3 = Number(prompt(`Digite o primeiro número`))
n4 = Number(prompt(`Digite o segundo número`))
function funcaoSubtracao (n3, n4){
    subtracao =n3 - n4
    return subtracao
}
console.log(funcaoSubtracao(n3, n4));

n5 = Number(prompt(`Digite o primeiro número`))
n6 = Number(prompt(`Digite o segundo número`))
function funcaoMultiplicacao (n5, n6){
    multiplicacao =n5 * n6
    return multiplicacao
}
console.log(funcaoMultiplicacao(n5, n6));

n7 = Number(prompt(`Digite o primeiro número`))
n8 = Number(prompt(`Digite o segundo número`))
function funcaoDivisao (n7, n8){
    divisao =n7 / n8
    return divisao
}
console.log(funcaoDivisao(n7, n8));


