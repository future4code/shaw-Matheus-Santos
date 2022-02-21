//Exercicios interpretação  1- "Matheus Nachtergaele" 2- 3 - Virginia Cavendish
//{canal: "Globo", horario: "14h"}
//2-nome: "Juca", 
	//idade: 3, 
	//raca: "SRD"

    //log (gato)
    //nome: "Juba", 
	//idade: 3, 
	//raca: "SRD"

    //tartaruga
    //nome: "Jubo", 
	//idade: 3, 
	//raca: "SRD"


    // // B) Permite que um um objeto como uma expressão de array 
    // ou de uma string seja expandido para ser usado onde zero ou 
    // mais argumentos ou elementos são esperados, ou que um objeto seja expandido onde zero ou mais pares 
    // propiedade:valor são esperados

    // 3 -A) False, undefined
    //B)Vai ser impresso no código o valor false, pois esta especificado que
    // o objeto tera o valor da propriedade, e o valor desta propriedade especificar "backender" é false.
    // E o segundo  sera impresso undefined pois não foi criado uma propriedade  para ter sido atribuida
    // o valor altura

    //ESCRITA DE CÓDIGO
    // 1-A

//     function textoDaTela(parametro){
//     console.log(`Eu sou ${parametro.nome} mas pode me chamar de ${parametro.apelido[0]}`)
//         console.log(novoObjeto);
// }
//  const objeto = {
//     nome:`Matheus Natal Santos`,
//     apelido:["Natal", "Thetheu", "Mat"],


// }

// const novoObjeto = {
//     ...objeto,
//    apelido: ["NATAL", "THETHEU", "MAT"]
// }

//     textoDaTela(objeto)


//1-A- DENOVO

// function funcao (a) {
// console.log(`"Eu sou ${a.nome}, mas pode me chamar de: ${a.apelidos[0]}, ${a.apelidos[1]},${a.apelidos[2]}`)
// }
// const pessoa ={
//     nome:`matheus natal santos`,
//     apelidos:["Natal", "Thetheu", "Mat"],
// }
// const pessoaNova ={
//     ...pessoa,
//     apelidos:["NATAL", "THETHEU", "MAT"]
// }
// funcao(pessoaNova)



// 2-

// function funcao (a){
//     return array = [a.nome, a.nome.length, a.idade, a.profissão, a.profissão.length]
// }
//  pessoa1={
//     nome:"Fulano1",
//     idade:Number(21),
//     profissão:"Jogador de 1"
// }
//  pessoa2={
//     nome:"Fulano2",
//     idade:Number(22),
//     profissão:"Jogador de 2"
// }

// funcao (pessoa1)

// console.log(funcao(pessoa1));
// console.log(funcao(pessoa2));


//3-A

const carrinhoGlobal =[] 

     fruta1={
        nome:`banana`,
        disponibilidade: true
}

    fruta2={
        nome:`maça`,
        disponibilidade: true
}
    fruta3={
    nome:`pera`,
    disponibilidade: true
}

function receberObjeto (vss) {
carrinhoGlobal.push(vss)
}
receberObjeto(fruta1)
receberObjeto(fruta2)
receberObjeto(fruta3)

console.log(carrinhoGlobal);



