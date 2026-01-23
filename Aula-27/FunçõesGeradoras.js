/* 
1. O que são Funções Geradoras?
Controle de Fluxo: Ao contrário de funções comuns, onde a função retém o controle até terminar, em uma função geradora, o controle pode ser devolvido ao programa chamador a qualquer momento e retomado depois de onde parou.
Retorno Adiado: A função não processa tudo de uma vez; ela retorna valores sob demanda.
Pilar Assíncrono: Elas são fundamentais para entender como o JavaScript lida com tarefas assíncronas modernas.

2. Sintaxe e Funcionamento
Declaração: É identificada pelo uso de um asterisco após a palavra-chave function (ex: function* cores()).
O comando yield: Funciona como um "ponto de parada" e retorno parcial. Quando a função encontra um yield, ela suspende a execução, retorna o valor indicado e "lembra" onde parou para a próxima chamada.
O Iterador: Ao chamar a função geradora pela primeira vez, ela não executa o código interno imediatamente; em vez disso, ela retorna um objeto iterador.
Método .next(): Para avançar na execução até o próximo yield, utiliza-se o método .next(). Ele retorna um objeto com o value (o valor retornado) e done (um booleano indicando se a função terminou).

3. Exemplos Práticos da Aula
Lista de Valores: Criar uma função que retorna uma cor diferente a cada vez que é chamada (Vermelho, Verde, Azul).
Interação com Parâmetros: A aula demonstra como passar valores de volta para dentro da função através do método .next(valor), permitindo uma "conversa" entre a função e o programa.
Geradores Infinitos: É possível criar um loop infinito dentro da função geradora (como um contador). Como ela para no yield, ela não trava o navegador e só gera o próximo número quando você solicita explicitamente.

Dica Extra para seu Entendimento:
Um ponto que pode ajudar a visualizar o poder das geradoras é o conceito de Lazy Evaluation (Avaliação Preguiçosa). Imagine que você tem uma lista de 1 milhão de itens, mas só precisa processar os 10 primeiros agora. Com uma função comum, você teria que gerar a lista toda primeiro. Com uma Função Geradora, você gera apenas o que consome, economizando muita memória e processamento.
*/

function* cores(){
    yield 'Vermelho'
    yield 'Verde'
    yield 'Azul'
}

const itc = cores()

for (let c = 1; c <= 3; c++){
    //console.log(itc.next().value)
}

function* perguntas(){
    const nome = yield 'Qual o seu nome?'
    const esporte = yield 'Qual o seu esporte favorito?'
    return `Seu nome é ${nome}, seu esporte favorito é ${esporte}`
}

const per = perguntas()
//console.log(per.next().value)
//console.log(per.next('Raí').value)
//console.log(per.next('MMA').value)

function* contador(){
    let i = 0
    while(true){ // Loop infinito
        yield i++
    }
}

const c = contador()
for(let i = 1; i <= 11; i++){
    console.log(c.next().value)
}