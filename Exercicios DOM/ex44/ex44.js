const precos = [5.50, 10.00, 2.99, 120.00, 50.00, 8.20]
const precosBaratos = precos.filter((valor) => {
    if(valor <= 10.00){
        return true
    } else {
        return false
    }
})

console.log(precosBaratos)