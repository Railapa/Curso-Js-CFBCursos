const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const pares = numeros.filter((valor, indice) => {
    if(valor%2==0){
        return true
    } else {
        return false
    }
})

console.log(pares)