const in_nome = document.querySelector('#in_nome')
const in_poder = document.querySelector('#in_poder')
const btn_criar = document.querySelector('#btn_criar')
const painel_heroi = document.querySelector('#painel_heroi')
const res_frase = document.querySelector('#res_frase')

class Heroi{
    constructor(nome, poder){
        this.nome = nome
        this.poder = poder
    }

    apresentar(){
        return `O heroi ${this.nome} entrou na batalha com o poder de ${this.poder}`
    }
}

btn_criar.addEventListener('click', () => {
    const novoHeroi = new Heroi(in_nome.value, in_poder.value)

    painel_heroi.style.display = 'block'
    res_frase.innerHTML = novoHeroi.apresentar()
})