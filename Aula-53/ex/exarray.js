const valor1 = document.querySelector('#valor1')
const valor2 = document.querySelector('#valor2')
const res = document.querySelector('#res')
const btn_soma = document.querySelector('.btn_soma')
const btn_subtracao = document.querySelector('.btn_subtracao')
const btn_multiplicacao = document.querySelector('.btn_multiplicacao')
const btn_divisao = document.querySelector('.btn_divisao')

const op = [
    (op1, op2) => {
        return op1 + op2
    }, 
    (op1, op2) => {
        return op1 - op2
    }, 
    (op1, op2) => {
        return op1 * op2
    }, 
    (op1, op2) => {
        return op1 / op2
    }, 
]

btn_soma.addEventListener('click', () => {
    res.value = op[0](Number(valor1.value), Number(valor2.value))
})

btn_subtracao.addEventListener('click', () => {
    res.value = op[1](Number(valor1.value), Number(valor2.value))
})

btn_multiplicacao.addEventListener('click', () => {
    res.value = op[2](Number(valor1.value), Number(valor2.value))
})

btn_divisao.addEventListener('click', () => {
    res.value = op[3](Number(valor1.value), Number(valor2.value))
})