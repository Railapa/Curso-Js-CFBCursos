/* 
Comandos Condicionais (IF e IF ELSE)
O if é a estrutura básica de controle de fluxo, permitindo que o programa tome decisões baseadas em testes lógicos.

Estrutura Básica (IF):
Avalia uma expressão lógica. Se o resultado for verdadeiro (true), executa o bloco de código associado.
Se for falso (false), o bloco é ignorado e o programa segue para a próxima linha fora do if.

O uso de Chaves {}:
Se o if tiver apenas uma linha de comando, as chaves são opcionais.
Para múltiplos comandos, o uso das chaves é obrigatório para definir o escopo do bloco.

Cláusula ELSE:
Define o que deve ser executado "caso contrário", ou seja, quando a condição do if for falsa.

Encadeamento (ELSE IF):
Permite testar múltiplas condições em sequência. O programa testa a primeira; se for falsa, passa para a próxima, e assim por diante.

Aninhamento:
É possível colocar um if dentro de outro para criar verificações mais complexas e dependentes.

Operadores Lógicos no IF:
Você pode combinar condições usando os operadores && (AND) e || (OR).
Exemplo: if (energia > 70 && clima == "sol") só executará se ambas as condições forem verdadeiras.
*/

const idade = 10
if (idade < 16){
    console.log('Não pode votar')
} else if(idade >= 18 && idade <= 65 ){
    console.log('Voto Obrigatorio')
} else {
    console.log('Voto Opicional')
}