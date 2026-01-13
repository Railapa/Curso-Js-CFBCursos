function obterSaudacao(){
    return `Olá! Seja bem-vindo ao curso`
}

let mensagem = obterSaudacao()
//console.log(mensagem)

function calcularDobro(){
    let n1 = 50
    return n1 * 2
}

//console.log(calcularDobro())

function verificarStatus(){
    let idade = 17
    if (idade >= 18){
        return `Acesso Liberado`
    } else {
        return 'Acesso Negado'
    }
}

console.log(verificarStatus())