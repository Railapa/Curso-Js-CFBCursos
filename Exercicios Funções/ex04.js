function somarTudo(...valores){
    let res = 0
    for(v of valores){
        res += v
    }
    return res
}

console.log(somarTudo(10,20,30,40))


function exibirConvidados(...nomes){
    for(n of nomes){
        console.log(`Convidados: ${n}`)
    }

    return n
}

//exibirConvidados('João', 'Maria', 'Renato', 'Giovanna', 'Marcelo')




function quantosParametros(...itens){
    return itens.length
}

console.log(quantosParametros(1, 2, 3));
console.log(quantosParametros("A", "B", "C", "D", "E"));