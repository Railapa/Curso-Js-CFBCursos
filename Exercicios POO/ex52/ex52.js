const container_notificacoes = document.querySelector('#container_notificacoes')
const btn_gerar = document.querySelector('#btn_gerar')

class Notificacao {
    constructor(mensagem, tipo) {
        this.mensagem = mensagem
        this.tipo = tipo
    }

    enviar() {
        const div = document.createElement('div')
        div.setAttribute('class', 'divNot')

        div.style.backgroundColor = this.tipo === 'sucesso' ? 'green' : 'red'
        div.style.color = 'white'
        div.style.padding = '10px'
        div.innerHTML = `<span>${this.mensagem}</span>`

        container_notificacoes.appendChild(div)

        const btnLido = document.createElement('button')
        btnLido.setAttribute('class', 'btnLido')
        btnLido.innerHTML = 'Lido'
        btnLido.style.marginLeft = '10px'

        btnLido.addEventListener('click', () => {
            div.remove()
        })

        div.appendChild(btnLido)
    }
}

const frases = ["Nova mensagem!", "Erro ao carregar", "Upload concluído", "Senha incorreta"];

btn_gerar.addEventListener('click', () => {
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    const tipoAleatorio = Math.random() > 0.5 ? 'sucesso' : 'erro';

    const novaNot = new Notificacao(fraseAleatoria, tipoAleatorio);

    novaNot.enviar();
})