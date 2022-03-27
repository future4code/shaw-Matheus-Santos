ˋˋˋ
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui

ˋˋˋlet salario = 2000
let porcentagemVenda = 0.05
let aumentoSalarioSobVendas = valorTotalVendas*porcentagemVenda
let salarioComBonus = salario + aumentoSalarioSobVendas
let comissao100 = 100*qtdeCarrosVendidos
let salarioReal = salarioComBonus + comissao100
return salarioReal
}ˋˋˋ