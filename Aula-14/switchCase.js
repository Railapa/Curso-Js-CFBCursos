/*
1. O que é o switch case?
É uma alternativa ao uso de múltiplos if...else quando se tem valores específicos para testar [08:40].
Ele avalia uma expressão e tenta encontrar uma correspondência positiva entre os casos (cases) programados [00:27].

2. Estrutura e Funcionamento
switch: Inicia a avaliação da variável ou expressão.
case: Define um valor específico a ser comparado. Se houver coincidência, o bloco de comandos associado é executado [01:40].
break: Comando essencial ao final de cada bloco de caso. Ele interrompe a execução do switch e impede que o código continue executando os casos seguintes [04:28].
default: Funciona como um "padrão". Se nenhum dos casos anteriores for correspondido, o código dentro do default será executado [02:58].

3. Exemplos Práticos
Pódio de Corrida: O professor demonstra um exemplo onde a variável colocação define se o resultado será "primeiro lugar", "segundo lugar" ou "terceiro lugar" [04:16].
Múltiplos Casos para uma Mesma Ação: É mostrado como agrupar casos (ex: case 4, case 5 e case 6) para que todos executem o mesmo bloco de comandos, como ganhar um "prêmio de participação" [07:25].
Uso do Default: Se a colocação for um valor não mapeado (como 7 ou 10), o programa cai no default informando que o competidor "não subiu ao pódio" [06:55].
*/

let diaSemana = 12
switch (diaSemana) {
    case 0:
    console.log('Domingo!')
    break
    case 1: 
    console.log('Segunda-Feira!')
    break
    case 2: 
    console.log('Terça-Feira!')
    break
    case 3: 
    console.log('Quarta-Feira!')
    break
    case 4: 
    console.log('Quinta-Feira!')
    break
    case 5: 
    console.log('Sexta-Feira!')
    break
    case 6: 
    console.log('Sabado!')
    break
    default: 
    console.log('Dia invalido')
    break
}