const btn_voltar = document.querySelector('#btn_voltar')
const btn_avancar = document.querySelector('#btn_avancar')
const btn_google = document.querySelector('#btn_google')
const btn_reload = document.querySelector('#btn_reload')
const num_hist = document.querySelector('#num_hist')

btn_voltar.addEventListener('click', () => {
    window.history.go(-1)
})

btn_avancar.addEventListener('click', () => {
    window.history.go(1)
})

btn_google.addEventListener('click', () => {
    window.location.assign('https://google.com')
})

btn_reload.addEventListener('click', () => {
    window.location.reload()
})

num_hist.innerHTML = window.history.length