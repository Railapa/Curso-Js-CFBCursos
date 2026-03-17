const base_num = document.querySelector('#base_num')
const in_expoente = document.querySelector('#in_expoente')
const res_final = document.querySelector('#res_final')
const btn_gerar_base = document.querySelector('#btn_gerar_base')
const btn_calcular_potencia = document.querySelector('#btn_calcular_potencia')

btn_gerar_base.addEventListener('click', () => {
    const numAleatorio = Math.random() * 10
    base_num.innerHTML = Math.round(numAleatorio)
})

btn_calcular_potencia.addEventListener('click', () => {
    const numAleatorio = Math.random() * 10
    base_num.innerHTML = Math.round(numAleatorio)

    const NumPow = Math.pow(numAleatorio, in_expoente.value)

    res_final.innerHTML = Math.round(NumPow)
})