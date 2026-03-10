const btn_checar = document.querySelector('#btn_checar')
const status_missao = document.querySelector('#status_missao')
const cargas = [80, 95, 60, 45]

btn_checar.addEventListener('click', () => {
    const oxigenio = cargas.every((val) => {
        return val > 50
    })

    if(oxigenio){
        status_missao.innerHTML = '✅ Todos prontos! Mergulho autorizado.'
        status_missao.classList.add('autorizado')
    } else {
        status_missao.classList.remove('autorizado')
        status_missao.innerHTML = '❌ MISSÃO ABORTADA! Há cilindros com carga baixa.'
        status_missao.classList.add('abortado')
    }
})