// Exercícios de interpretação ) 1- Sera impresso no console,toda a lista do objetos, com seus respectivos indices
// e o array inteiro, cada um deles sera impresso individualmente.
//  2) Serão impressos no console somente os nomes "Amanda Rangel", "Lais Petra","Leticia Chijo"
// 3)Será impresso no console "Amanda Rangel", "Lais Petra"

//Exercícios de escrita de código
// 1)A)

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
// ]

// const apenasOnome = pets.map((pet)=>{
//     console.log(pet.nome);

// })

// 1) b)

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
// ]

// const apenasSalcicha = pets.filter((pet)=>{
//     return pet.raca ==="Salsicha"

// })
// console.log(apenasSalcicha);

// C)

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]


const mensagemDeDesconto = pets.filter((pet)=>{
    return pet.raca === "Poodle"    

}).map((pet)=>{
        console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a`, [pet.nome], "!");
})

console.log(mensagemDeDesconto);





