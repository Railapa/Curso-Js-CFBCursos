const f_tipoMilitar = document.querySelector('#f_tipoMilitar')
const f_tipoNormal = document.querySelector('#f_tipoNormal')
const f_municao = document.querySelector('#f_municao')
const f_blindagem = document.querySelector('#f_blindagem')
const carros = document.querySelector('#carros')
const btn_addCarro = document.querySelector('#btn_addCarro')
const f_nome = document.querySelector('#f_nome')
const f_portas = document.querySelector('#f_portas')

let a_carros = []

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
        div.setAttribute('class', 'carro')
        div.innerHTML = `Nome: ${c.nome}`
        div.innerHTML += `<br/> Portas: ${c.portas}`
        div.innerHTML += `<br/> Blindagem: ${c.blindagem}`
        div.innerHTML += `<br/> Munição: ${c.municao}`
        carros.appendChild(div)
    })
}

btn_addCarro.addEventListener('click', () => {
    if(f_tipoNormal.checked){
        const carro = new Carro(f_nome.value, f_portas.value)
        a_carros.push(carro)
    } else if (f_tipoMilitar.checked){
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

/*
1. Interatividade do Formulário com Classes
O professor mostra como habilitar ou desabilitar campos de entrada (inputs) dinamicamente.

Ao selecionar o tipo de carro "Militar", os campos de "Blindagem" e "Munição" são desbloqueados através do método removeAttribute('disabled').

Ao voltar para o tipo "Normal", os campos são bloqueados novamente com setAttribute('disabled', 'disabled') e os seus valores são zerados.

2. Instanciação Dinâmica baseada em Seleção
O script verifica qual rádio button está marcado (checked) para decidir qual classe instanciar.

Se for normal, cria um new Carro(); se for militar, cria um new Militar(), passando os parâmetros específicos de cada um (nome, portas, blindagem, munição).

3. Gerenciamento de Coleções (Arrays de Objetos)
Todos os novos objetos criados são armazenados num Array chamado arrayCarros através do método .push().

Isso permite que o programa mantenha uma lista organizada de todas as instâncias ativas na memória.

4. Renderização Dinâmica no DOM
Foi criada uma função gerenciarExibicaoCarros que percorre o array de objetos.

Para cada objeto no array, a função cria um elemento div, aplica estilos CSS e injeta as informações (nome, portas, cor, etc.) utilizando Template Strings.

É ensinado a importância de limpar o contentor HTML (innerHTML = "") antes de renderizar a lista para não duplicar os itens na tela.
*/