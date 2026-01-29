const cheia = document.querySelector('#caixa-cheia')
const vazia = document.querySelector('#caixa-vazia')

console.log(cheia.hasChildNodes())
console.log(vazia.hasChildNodes())

if(cheia.children.length > 0){
    console.log('Possui filhos')
} else {
    console.log('Não possui filhos')
}

if(vazia.children.length > 0){
    console.log('Possui filhos')
} else {
    console.log('Não possui filhos')
}