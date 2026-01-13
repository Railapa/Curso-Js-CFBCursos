let pares = 0
let impares = 0
for(let c = 1; c <= 30; c++){
    if(c%2==0){
        console.log(`${c} é um numero par`)  
        pares++
    } else {
        console.log(`${c} é um numero impar`)
        impares++
    }
}

console.log(`Numero total de pares: ${pares}`)
console.log(`Numero total de impares: ${impares}`)