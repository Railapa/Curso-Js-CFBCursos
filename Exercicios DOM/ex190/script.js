const luzVermelha = document.querySelector('#luzVermelha')
const luzAmarela = document.querySelector('#luzAmarela')
const luzVerde = document.querySelector('#luzVerde')
const btnMudar = document.querySelector('#btnMudar')

btnMudar.addEventListener('click', () => {
    if(luzVermelha.classList.contains('vermelho')){
        luzVermelha.classList.remove('vermelho')
        luzAmarela.classList.add('amarelo')
    } else if(luzAmarela.classList.contains('amarelo')){
        luzAmarela.classList.remove('amarelo')
        luzVerde.classList.add('verde')
    } else{
        luzVerde.classList.remove('verde')
        luzVermelha.classList.add('vermelho')
    }
})