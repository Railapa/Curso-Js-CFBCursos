let valorCompra = 30;
let temCartao = 'nao';

if (valorCompra > 200) {
    console.log("10% de desconto");
} else if (valorCompra <= 200 &&  temCartao == 'sim') {
    console.log("5% de desconto");
} else {
    console.log("Valor normal");
}