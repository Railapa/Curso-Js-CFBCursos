//Função "Normal"
const soma = function(v1,v2){
    return v1 + v2
}
console.log(soma(10,5))


//Arrow function - Colocamos primeiro os parametros e depois substituimos a palavra 'function' pela '=>'
const somar = (v1, v2) => {
    return v1 + v2
}
console.log(somar(5,5))


//Arrow function sem a utlização dos parenteses (pode ser usado apenas quando a função receber somente um parametro, mais que isso devemos utilizar os parenteses)
const nome = n =>{
    return n
}
console.log(nome('Bruno'))


//Arrow function sem return e {} - Utilizado apenas quando a função recebe somente uma linha, se a função for um pouco mais elaborada, devemos usar o return e as {} normalmente

const add = n => n + 10
console.log(add(10))