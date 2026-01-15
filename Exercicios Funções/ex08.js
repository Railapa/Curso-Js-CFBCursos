const prepararMensagem = (usuario) => {
    const exibir = () =>{
        return `Olá, ${usuario}! Seu sistema está pronto`
    }
    return exibir(usuario)
}

//console.log(prepararMensagem('Raí'))

const carrinhoDeCompras = (...precos) =>{
    const calcularTotal = () =>{
        let res = 0
        for(p of precos){
            res += p
        }
        return res
    }
    return calcularTotal(precos)
}

//console.log(carrinhoDeCompras(50.00, 20.00, 30.00))

const processarNota = (nota) =>{
    const validar = () =>{
        if (nota >= 0 && nota <= 10){
            return `Nota ${nota} processada com sucesso`
        } else {
            return 'Nota Invalida'
        }
    }

    return validar()
}

console.log(processarNota(10))