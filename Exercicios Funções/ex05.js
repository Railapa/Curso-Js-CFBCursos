let somarVarios = function(...valores){
    let res = 0
    for(v of valores){
        res += v
    }

    return res
}

console.log(somarVarios(3,4,6,10,2,15))