let precos = [150, 2500, 300, 4500, 80, 1200]
for(n of precos){
    if(n > 1000){
        console.log(`Produto de luxo: R$ ${n}`)
    } else {
        console.log(`Produto comum: R$ ${n}`)
    }
}