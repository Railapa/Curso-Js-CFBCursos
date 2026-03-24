const url_digitada = document.querySelector('#url_digitada')
const btn_ir = document.querySelector('#btn_ir')
const btn_substituir = document.querySelector('#btn_substituir')
const btn_recarregar = document.querySelector('#btn_recarregar')
const btn_voltar = document.querySelector('#btn_voltar')
const btn_avancar = document.querySelector('#btn_avancar')
const num_historico = document.querySelector('#num_historico')

btn_ir.addEventListener('click', () => {
    window.location.assign(url_digitada.value)
})

btn_substituir.addEventListener('click', () => {
    window.location.replace(url_digitada.value)
})

btn_recarregar.addEventListener('click', () => {
    window.location.reload()
})

btn_voltar.addEventListener('click', () => {
    window.history.go(-1)
})

btn_avancar.addEventListener('click', () => {
    window.history.go(1)
})

num_historico.innerHTML = window.history.length