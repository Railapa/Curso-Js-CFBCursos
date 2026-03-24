const contador = document.querySelector('#contador')
const link_direto = document.querySelector('#link_direto')
const btn_parar = document.querySelector('#btn_parar')

let tempoContador = 5

const intervalo = setInterval(() => {
    tempoContador--
    contador.innerHTML = tempoContador

    if(tempoContador <= 0){
        clearInterval(intervalo)

        window.location.assign("https://www.youtube.com/cfbcursos")
    }
}, 1000)

btn_parar.addEventListener('click', () => {
    clearInterval(intervalo)
    alert("Redirecionamento cancelado!")
})

link_direto.addEventListener('click', (evt) => {
    evt.preventDefault()
    window.location.replace("https://www.youtube.com/cfbcursos")
});