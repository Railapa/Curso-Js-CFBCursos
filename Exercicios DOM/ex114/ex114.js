const f_nome = document.querySelector('#f_nome')
const f_portas = document.querySelector('#f_portas')
const f_blindagem = document.querySelector('#f_blindagem')
const f_municao = document.querySelector('#f_municao')
const f_tipoNormal = document.querySelector('#f_tipoNormal')
const f_tipoMilitar = document.querySelector('#f_tipoMilitar')
const btn_add = document.querySelector('#btn_add')
const btn_remover = document.querySelector('#btn_remover')
const container_frota = document.querySelector('.container-frota')

f_tipoMilitar.addEventListener('click', () => {
    if (f_tipoMilitar.checked) {
        f_blindagem.removeAttribute('disabled', 'disabled')
        f_municao.removeAttribute('disabled', 'disabled')
    }
})

f_tipoNormal.addEventListener('click', () => {
    f_municao.setAttribute('disabled', 'disabled')
    f_blindagem.setAttribute('disabled', 'disabled')
    f_blindagem.value = '0'
    f_municao.value = '0'
})
class CarroNormal {
    constructor(nome, portas) {
        this.nome = nome
        this.portas = portas
    }
}

class CarroMilitar extends CarroNormal {
    constructor(nome, portas, blindagem, municao) {
        super(nome, portas)
        this.blindagem = blindagem
        this.municao = municao
    }
}

let carros = []

const addCarro = () => {
    container_frota.innerHTML = ''
    carros.map((el) => {
        const div = document.createElement('div')
        const btnRemover = document.createElement('button')
        btnRemover.innerHTML = 'remover carro'
        div.setAttribute('class', 'carro-card')
        btnRemover.addEventListener('click', () => {
            carros = carros.filter((c) => {
                return c !== el
            })
            addCarro()
        })
        div.innerHTML = `Nome: ${el.nome}`
        div.innerHTML += `<br/> Portas: ${el.portas}`
        div.innerHTML += `<br/> Blindagem: ${el.blindagem || ''}`
        div.innerHTML += `<br/> Munição: ${el.municao || ''}`
        container_frota.appendChild(div)
        div.appendChild(btnRemover)
    })
    f_nome.value = ''
    f_portas.value = '0'
    f_blindagem.value = '0'
    f_municao.value = '0'
}

btn_add.addEventListener('click', () => {
    if (f_tipoNormal.checked) {
        const novoCarro = new CarroNormal(f_nome.value, f_portas.value)
        carros.push(novoCarro)
        addCarro()
    } else if (f_tipoMilitar.checked) {
        const novoCarro = new CarroMilitar(f_nome.value, f_portas.value, f_blindagem.value, f_municao.value)
        carros.push(novoCarro)
        addCarro()
    }

})