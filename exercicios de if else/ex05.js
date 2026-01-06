let valorEmprestimo = Number(prompt('Digite o valor do emprestimo'))
let salarioMensal = Number(prompt('Digite seu salario mensal'))
let parcelas = Number(prompt('Digite a quantidade de parcelas desejadas'))
let idade = Number(prompt('Digite sua idade'))
let valorParcela = valorEmprestimo / parcelas
if (valorParcela <= (salarioMensal * 0.3) && idade > 21){
    alert('Emprestimo Aprovado')
} else {
    alert('Emprestimo não Aprovado')
}