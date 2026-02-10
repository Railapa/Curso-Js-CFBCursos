const p_array = document.querySelector('#array')
const btnReduzir = document.querySelector('#btnReduzir')
const resultado = document.querySelector('#resultado')

const elementos_array = [1,2,3,4,5]
let ant = []
let atu = []

p_array.innerHTML = `[${elementos_array}]`

btnReduzir.addEventListener('click', () => {
    resultado.innerHTML = elementos_array.reduce((anterior, atual, posicao) => {
        ant.push(anterior)
        atu.push(atual)
        return atual + anterior
    })
    resultado.innerHTML += '<br/>Valor Anterior ' + ant + '<br/>Valor Atual ' + atu
})  

/*
1. O que é o reduce()?
O objetivo do reduce() é pegar um array com vários itens e transformá-lo em um único valor final. Imagine uma calculadora: você digita um número, aperta "+", digita outro, e a calculadora guarda o "resultado parcial" até você terminar a conta.

2. Os Parâmetros (O segredo do método)
O reduce() recebe uma função de callback com um parâmetro a mais do que os outros métodos:

Anterior (ou Acumulador): É o resultado da conta feita no passo anterior. Na primeira vez que o loop roda, ele assume o valor do primeiro item do array (ou um valor inicial que você definir).

Atual: É o elemento que o JavaScript está "lendo" naquele exato momento no array.

Índice e Array: (Opcionais) Funcionam como nos outros métodos.

3. Como a "mágica" acontece (Passo a passo)
Se tivermos o array [1, 2, 3, 4, 5] e quisermos somar tudo:

Rodada 1: O "Anterior" é 1 e o "Atual" é 2. A soma é 3.

Rodada 2: O "Anterior" agora é o 3 (resultado anterior) e o "Atual" é o 3 do array. A soma é 6.

Rodada 3: O "Anterior" é 6 e o "Atual" é 4. A soma é 10.

Rodada 4: O "Anterior" é 10 e o "Atual" é 5. O Resultado Final é 15.

4. Destaques da Aula 50:
Flexibilidade: O Professor Bruno mostra que, embora o nome sugira "reduzir", você pode usar a lógica para criar novos arrays (como o array de dobros) ou fazer filtros complexos.

O Valor Inicial: Embora não detalhado profundamente no vídeo, você pode passar um segundo argumento após a função para dizer onde a conta começa (ex: começar a soma em 0 ou 100).


Reduce com srings: 

O seu array era: ["Ana", "Bruno", "Carlos", "Diana"].

Primeira Rodada:

Como você não passou um valor inicial (o ""), o reduce() pegou o primeiro item como ponto de partida.

Anterior (ant): "Ana"

Atual (atu): "Bruno"

Ação: Ele faz "Ana" + ", " + "Bruno".

Resultado Parcial: "Ana, Bruno"

Segunda Rodada:

Agora, o resultado anterior vira o novo ant.

Anterior (ant): "Ana, Bruno"

Atual (atu): "Carlos"

Ação: "Ana, Bruno" + ", " + "Carlos".

Resultado Parcial: "Ana, Bruno, Carlos"

Terceira Rodada:

Anterior (ant): "Ana, Bruno, Carlos"

Atual (atu): "Diana"

Ação: "Ana, Bruno, Carlos" + ", " + "Diana".

Resultado Final: "Ana, Bruno, Carlos, Diana"
*/