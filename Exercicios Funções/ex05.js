let dobro = function(n){
    return n * 2
}

//console.log(dobro(3.5))


let somar = function(...valores){
    let res = 0
    for(v of valores){
        res += v
    }

    return res
}

//console.log(somar(4,6,4,2,4,15,6))