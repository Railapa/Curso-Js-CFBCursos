const nome = Symbol.for('nome')
const numero = Symbol.for('numero')
const corUniforme = Symbol.for('cor do uniforme')

const jogador = {
    nome: 'j1',
    numero: 10,
    corUniforme: 'Preto'
}

jogador[numero] = 10
jogador[corUniforme] = 'Preto'

console.log(nome) 