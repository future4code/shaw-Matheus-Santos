// 1-A) o código solicita que o usuario insira um número, e verifica se
// o resto da divisão deste número é igual a 0.Caso o mesmo seja,
// ele irá imprimir no console "passou no teste", do contrario, irá imprimir
// "não passou no teste, ele realiza um teste de resto de divisão, para 
// verificarmos se o número é par ou impar"

// 1-B)Número inteiros divisiveis por 2.
// 1-C)Números inteiros não divisiveis por 2.

// 2-A) Para identificar o preço da fruta que o usuario pesquisar no prompt
// B)   A mensagem será "O preço da fruta Maça é R$2.25"
// C)   A mensagem seria "O preço da fruta  Pêra  é  R$  5"

// 3-A) A primeira linha esta solicitando que o usuário insira um número.
// B) "Esse número passou no teste" seria a primeira resposta, e a segunda resposta seria
//     Uma mensagem de erro, mensagem não foi definida.
// C) Havera um erro no console pois a variavel mensagem estando dentro do escopo filho não se relaciona
// com o console.log(mensagem) que esta fora de fora do escopo filho.


//Exercício de escrita de código
//1)
    let idade = prompt (`Qual a sua idade?`)

        if (idade >=18) {
            console.log("Você pode dirigir!");
        }else{
            console.log(`Você não pode dirigir`); 
        }

   
   // 2)
    let aluno = prompt(`Qual turno você estuda?`)
    
        if (aluno === "v") {
            console.log("Boa tarde");
        }else if (aluno === "m" ){
            console.log("Bom dia");
        } else if(aluno === "n") {
            console.log("Boa noite");
        }

    // 3) 
        
        let aluno = prompt(`Qual turno você estuda?`)
            switch (aluno) {
                case`v`:
                    console.log(`Boa tarde!`);
                break;
                case `m`:
                    console.log(`Bom dia`);
                    break;
                    case `n`:
                        console.log(`Boa noite`);

            }


        // 4)

        let perguntaGeneroDoFilme = prompt(`Qual genero do filme?`)
        let perguntaPrecoDoFilme =  Number(prompt(`Qual o preço do filme?`))
        if (perguntaGeneroDoFilme === "fantasia" && perguntaPrecoDoFilme < 15) {
            console.log("Bom filme!");
            }else{
                console.log("Escolha outro filme :(");
            }