/* Exercícios de Interpretação 
 Exercício 1)
  Será impresso 10 5
   Exercício 2)
    Será impresso 10 10 10
   Exercício 3)
  Será let horasPorDia = prompt("Quantas horas você trabalha por dia?")
 let recebePorDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${horasPorDia/recebePorDia} por hora`)
*/


let nome 
    let idade
   /* typeof nome
    typeof idade*/
        //console.log(typeof nome )
         //console.log(typeof idade )
           //Deu Undefined porque não há nenhum valor atribuido a ambos.
         nome = prompt("Qual o seu nome?")
     idade = prompt("Qual a sua idade?")
  console.log(typeof nome, typeof idade,)
 /*Ambos retornaram como String pois o prompt só retorna
   desta maneira */
console.log("Olá",nome, "Você tem", idade, "anos")

//Exercício número 2
  let perguntaRoupa = prompt("Vocẽ esta usando uma roupa azul hoje? RESPONDA APENAS SIM OU NÃO")
    let temAnimal = prompt("Vocẽ tem um animal?")
     let gostaDeSuco = prompt("Você gosta de suco?")
      let viuVingadores = prompt("Você viu o filme dos vingadores?")
     console.log("pergunta roupa azul", perguntaRoupa)
    console.log("tem animal?",temAnimal)
   console.log("gosta de suco?", gostaDeSuco)
  console.log("Viu o filme dos vingadores?", viuVingadores)
//Exercício número 3
  let a = 10
   let b = 25
    let c 
     c = a
    a = b
   b = c
  console.log(a,b)
/* Explicação  Nesta parte se fez necessário a criação de uma 
  terceira variavel "C" para que haja a preservação do valor da variavel seguindo o exemplo 
 dos copos, presente nas dicas do Notion"*/





