const btn_analisar = document.querySelector('#btn_analisar')
const maior = document.querySelector('#maior')
const menor = document.querySelector('#menor')
const btn_potencia = document.querySelector('#btn_potencia')
const res_potencia = document.querySelector('#res_potencia')
const btn_raiz = document.querySelector('#btn_raiz')
const res_raiz = document.querySelector('#res_raiz')

btn_analisar.addEventListener('click', () => {
    maior.innerHTML = Math.max(7.5,9.2,5.8,8.0)
    menor.innerHTML = Math.min(7.5,9.2,5.8,8.0)
})

btn_potencia.addEventListener('click', () =>{
    res_potencia.innerHTML = Math.pow(2,10)
})

btn_raiz.addEventListener('click', () => {
    res_raiz.innerHTML = Math.sqrt(144)
})