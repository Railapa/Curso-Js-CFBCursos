class Componente {
    constructor() {
        if (this.constructor === Componente) {
            throw new TypeError('Essa classe nao pode ser instanciada')
        }
    }
}

class Botao extends Componente {
    constructor() {
        super()
        if (this.desenhar == undefined) {
            throw new TypeError('Metodo Obrigatorio')
        }
    }

    desenhar() {
        console.log('Desenhando um botão na tela...')
    }
}

class Input extends Componente {
    constructor() {
        super()
        if (this.desenhar == undefined) {
            throw new TypeError('Metodo Obrigatorio')
        }
    }

}

// const componente = new Componente()
// console.log(componente)

// const input = new Input()
// console.log(input)

const botao = new Botao()
botao.desenhar()