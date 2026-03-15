const res_andar = document.querySelector('#res_andar')
const btn_subir = document.querySelector('#btn_subir')
const btn_descer = document.querySelector('#btn_descer')
const msg_elevador = document.querySelector('#msg_elevador')

class Elevador{
    constructor(){
        this.andarAtual = 0
    }

    subir(){
        if(this.andarAtual < 5){
            msg_elevador.innerHTML = 'A subir...'
            return ++this.andarAtual
        } else {
             msg_elevador.innerHTML = 'Já está no último andar!'
             return 5
        }
    }

    descer(){
        if(this.andarAtual > 0){
            msg_elevador.innerHTML = 'A descer...'
            return --this.andarAtual
        } else {
            msg_elevador.innerHTML = 'Ja estamos no terreo'
            return 0
        }
    }
}

const novoElevador = new Elevador()

btn_subir.addEventListener('click', () => {
    res_andar.innerHTML = novoElevador.subir()
})

btn_descer.addEventListener('click', () => {
    res_andar.innerHTML = novoElevador.descer()
})