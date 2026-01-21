const compararNumeros = (n1=0, n2=0) => {
    if(n1 > n2){
        return 'O primeiro numero é maior'
    }else if (n1 < n2){
        return 'O segundo é maior'
    } else {
        return 'Numeros iguais'
    }
}

console.log(compararNumeros(20,10))
console.log(compararNumeros(5,15))
console.log(compararNumeros(10,10))