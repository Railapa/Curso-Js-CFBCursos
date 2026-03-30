const btn_cfb = document.querySelector('#btn_cfb')
const btn_reload = document.querySelector('#btn_reload')
const btn_voltar = document.querySelector('#btn_voltar')
const num_pular = document.querySelector('#num_pular')
const btn_pular = document.querySelector('#btn_pular')
const info_historico = document.querySelector('#info_historico')
const btn_avancar = document.querySelector('#btn_avancar')
const btn_substituir = document.querySelector('#btn_substituir')
const in_url = document.querySelector('#in_url')
const btn_navegar = document.querySelector('#btn_navegar')

btn_cfb.addEventListener('click', () => {
    window.location.assign('https://youtu.be/aAdw_U7uTyE?si=oFBPLkBo5uVevj2g')
})

btn_reload.addEventListener('click', () => {
    window.location.reload()
})

btn_voltar.addEventListener('click', () => {
    window.history.back()
})

btn_avancar.addEventListener('click', () => {
    window.history.forward()
})

btn_pular.addEventListener('click', () => {    
    window.history.go(num_pular.value)
})

btn_substituir.addEventListener('click', () => {
    window.location.replace('https://youtu.be/aAdw_U7uTyE?si=oFBPLkBo5uVevj2g')
})

btn_navegar.addEventListener('click', () => {
    window.location.href = in_url.value
    in_url.value = ''
})

info_historico.innerHTML = window.history.length