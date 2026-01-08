let nota1 = 5
let nota2 = 8
let media = (nota1 + nota2) / 2
function calcularMedia(){
    return `${media}`
}

function verificarSituacao(){
     calcularMedia()
    if (media >= 7){
        return 'Aprovado'
    } else {
        return 'Reprovado'
    }
}

console.log(verificarSituacao())