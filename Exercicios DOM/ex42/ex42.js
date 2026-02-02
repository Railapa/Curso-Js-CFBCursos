const nomes = ["Raí", "Bruno", "Ana", "Cassiano", "Beatriz", "Adriano", "Bia"]

const nomesB = nomes.filter((valor) => {
    if(valor.startsWith("B")){
        return true
    } else {
        return false
    }
})

console.log(nomesB)