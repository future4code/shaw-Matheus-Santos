/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
const limite = 21
 let user = []
  let pc = []
   let boasVindas = "Boas vindas ao jogo de Blackjack!"
    console.log(boasVindas);
     if (confirm(`Quer iniciar uma nova rodada?`)) {
      pc [0] = comprarCarta();
       user [0] = comprarCarta();
        pc [1] = comprarCarta();
       user [1] = comprarCarta();
      }else {
     console.log("O jogo acabou");
    }
   let somaCartas = pc[0].valor + pc[1].valor
  let somaCartasUser = user[0].valor + user[1].valor
 console.log(`PC carta 1: ${pc[0].texto}, valor ${pc[0].valor} carta 2: ${pc[1].texto},valor ${pc[1].valor} o resultado da soma das cartas é: ${somaCartas} ` );
  console.log(`User carta 1:${user[0].texto}, valor ${user[0].valor} carta 2: ${user[1].texto}, valor ${user[1].valor} o resultado da soma das cartas é: ${somaCartasUser} ` );
   if( somaCartas > somaCartasUser && somaCartas <= 21 ){
    console.log("O computador ganhou!");
    }else if(somaCartasUser>somaCartas && somaCartasUser <= 21){
       console.log("O usuario ganhou!");
    }else if(somaCartas === somaCartasUser ){ //Não foi utilizado somente o else pois fica mais rápido para entender o código.
       console.log("Empate!");
    }
    


    