let pagamento = 'dinheiro'
let valorProduto = 100
function metodoPagamento(){
    if (pagamento == 'pix'){
        return `${valorProduto * 0.9}`
    } else if (pagamento == 'dinheiro'){
        return `${valorProduto * 0.95}`
    } else {
        return `${valorProduto}`
    }
}

console.log(`Valor final a pagar: ` + metodoPagamento())