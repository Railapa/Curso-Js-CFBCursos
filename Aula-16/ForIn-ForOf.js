/*
1. Comparação com o for Tradicional
O professor começa mostrando que percorrer um array com o for comum exige configurar manualmente o índice, a condição de parada baseada no tamanho do array (.length) e o incremento [01:03].
Com o for in e for of, essa estrutura fica muito mais limpa e automática [10:44].

2. Loop for in
O que ele faz: Itera sobre os índices (posições) ou propriedades de uma coleção [03:24].
No exemplo de um array numérico, o for in retorna 0, 1, 2, 3... [03:24].
Para acessar o valor do elemento usando for in, você deve usar a sintaxe colecao[indice] [03:55].

3. Loop for of
O que ele faz: Itera diretamente sobre os elementos (valores) da coleção [04:54].
No mesmo array numérico, o for of já retorna os valores reais (10, 20, 30...) sem precisar referenciar o índice [05:05].
É geralmente a escolha mais fácil quando você só precisa manipular os dados da lista [10:55].

4. Aplicação Prática com Elementos HTML
O professor utiliza document.getElementsByTagName para capturar várias divs da página [06:11].

Diferença crucial:
O for of permite alterar o conteúdo das divs (usando .innerHTML) de forma direta e simples [07:36].
O for in, ao percorrer elementos do DOM, acaba retornando também propriedades internas do objeto (como length, item e namedItem), o que pode gerar valores undefined se você tentar acessar o .innerHTML de tudo [08:29].
*/



//let num = [10,20,30,40,50]
// for(let i = 0; i<num.length; i++){
//     console.log(num[i])
// }

const objs = document.getElementsByTagName("div")

for(n in objs){
    console.log(objs[n].innerHTML="curso")
}

for (c of objs){
    console.log(c.innerHTML="curso")
}