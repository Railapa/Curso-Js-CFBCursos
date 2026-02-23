const f_tipoMilitar = document.querySelector('#f_tipoMilitar')
const f_tipoNormal = document.querySelector('#f_tipoNormal')
const f_municao = document.querySelector('#f_municao')
const f_blindagem = document.querySelector('#f_blindagem')
const carros = document.querySelector('#carros')
const btn_addCarro = document.querySelector('#btn_addCarro')
const btn_removerCarro = document.querySelector('#btn_removerCarro')
const f_nome = document.querySelector('#f_nome')
const f_portas = document.querySelector('#f_portas')
const carro = document.querySelector('.carro')

let a_carros = []

const removerCarro = (quem) => {
    a_carros=a_carros.filter((el) => {
        return el.nome != quem
    })
}

f_tipoMilitar.addEventListener('click', () => {
    f_blindagem.removeAttribute('disabled')
    f_municao.removeAttribute('disabled')
})

f_tipoNormal.addEventListener('click', () => {
    f_blindagem.setAttribute('disabled', 'disabled')
    f_blindagem.value = '0'
    f_municao.setAttribute('disabled', 'disabled')
    f_municao.value = '0'
})

const gerenciarExibicaoCarros = () => {
    carros.innerHTML = ''
    a_carros.map((c) => {
        const div = document.createElement('div')
        const btn = document.createElement('button')
        btn.innerHTML = 'Remover'
        btn.addEventListener('click', (evt) => {
            const quemRemover = evt.target.parentNode.dataset.nome
            removerCarro(quemRemover)
            gerenciarExibicaoCarros()
        })
        div.setAttribute('class', 'carro')
        div.setAttribute('data-nome', c.nome)
        div.innerHTML = `Nome: ${c.nome}`
        div.innerHTML += `<br/> Portas: ${c.portas}`
        div.innerHTML += `<br/> Blindagem: ${c.blindagem || ''}`
        div.innerHTML += `<br/> Munição: ${c.municao || ''}`
        carros.appendChild(div)
        div.appendChild(btn)
    })
}

btn_addCarro.addEventListener('click', () => {
    if (f_tipoNormal.checked) {
        const carro = new Carro(f_nome.value, f_portas.value)
        a_carros.push(carro)
    } else if (f_tipoMilitar.checked) {
        const carro = new Militar(f_nome.value, f_portas.value, f_blindagem.value, f_municao.value)
        a_carros.push(carro)
    }
    gerenciarExibicaoCarros()
})


class Carro {
    constructor(nome, portas) {
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = ''
    }

    ligar = function () {
        this.ligado = true
    }

    desligar = function () {
        this.ligado = false
    }

    setCor = function (cor) {
        this.cor = cor
    }
}

class Militar extends Carro {
    constructor(nome, portas, blindagem, municao) {
        super(nome, portas)
        this.blindagem = blindagem
        this.municao = municao
    }

    atirar = function () {
        if (this.municao > 0) {
            this.municao--
        }
    }
}