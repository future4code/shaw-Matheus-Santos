// Exercicios de interpretação de código
// 1) O código esta entrando em um loop até o valor do índice bater 4. O valor impresso será 10, pois a cada volta
// soma-se o indice ao valor anterior, assim sendo impresso 10 no console.
// 2) A- Será impresso no console, "19, 21, 23, 25, 27, 30"
//    B-  Provavelmente sim, mas não entendi a questão.
//
// 3) Serão impressos 4 linhas , cada uma adicionando um asteristico a mais com relação ao anterior.


//Exercícios de escrita de código
// 1)

    let i = 0
    let nomeBicho
    let nome=[]
    let numeroBicho = Number(prompt("Quantos bichinhos você tem?"))
    if (numeroBicho === 0){
        console.log("Que pena! Você pode adotar um pet!");
    }else {
        while(i <= numeroBicho ) {
        nome = prompt("Diga os nomes deles")
        nomeBicho.push(nome)
        i++
    }

    }
    

