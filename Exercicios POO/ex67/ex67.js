const in_num = document.querySelector('#in_num')
const in_msg = document.querySelector('#in_msg')
const btn_enviar = document.querySelector('#btn_enviar')
const res_log = document.querySelector('#res_log')
const painel_envio = document.querySelector('#painel_envio')


class Mensagem{
    constructor(texto){
        this.texto = texto
    }
}

class SMS extends Mensagem{
    constructor(texto, numero){
        super(texto)
        this.numero = numero
    }

    enviar(){
        return `Eviando SMS para ${this.numero}: "${this.texto}"`
    }
}


btn_enviar.addEventListener('click', () => {
    const novaMsg = new SMS(in_msg.value,Number(in_num.value))
    painel_envio.style.display = 'block'
    res_log.innerHTML = novaMsg.enviar()
})