const tipoDeDado = (valor) => {
    if (valor == typeof(String)){
        return `isso é uma string`
    } else if (valor == typeof(Number)){
        return 'isso é um numero'
    } else if (valor == typeof(Boolean)){
        return 'isso pe um boolean'
    } else {
        return 'Tipo desconhecido'
    }
    
}

console.log(tipoDeDado(123))