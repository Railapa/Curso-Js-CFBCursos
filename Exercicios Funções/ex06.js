function converterParaReal(valorDolar, cotacao){
    return valorDolar * cotacao
}

//console.log('R$' + converterParaReal(10, 5.50))

const verificarDesempenho = function(nota){
    if (nota >= 9){
        return 'Exelente'
    } else if(nota <= 8.9 && nota >= 7){
        return 'Bom'
    } else {
        return 'Precisa Melhorar'
    }
}

//console.log(verificarDesempenho(7.8))

function mediaDinamica(...notas){
    let res = 0
    for (n of notas){
        res += n
    }
    
    let tam = notas.length

    return res / tam
}

console.log(mediaDinamica(7,5,9))
