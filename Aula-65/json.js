const pessoa = {
    nome: 'Bruno',
    canal: 'CFB Cursos',
    curso: 'JavaScript',
    aulas:{
        aula01: 'Introdução',
        aula02: 'Variaveis',
        aula03: 'Condicional'
    }
}

const string_pessoa = {"nome":"Bruno","canal":"CFB Cursos","curso":"JavaScript","aulas":{"aula01":"Introdução","aula02":"Variaveis","aula03":"Condicional"}}

const s_json_pessoa = JSON.stringify(pessoa)
const o_json_pessoa = JSON.parse(s_json_pessoa)

console.log(o_json_pessoa) 

/* 
1. O que é JSON e por que converter?
JSON (JavaScript Object Notation) é o formato padrão para transmitir dados entre um cliente (seu navegador) e um servidor (API/Banco de Dados).

É muito mais fácil e "leve" enviar uma string de texto formatada do que um objeto complexo da memória do computador.

2. Os dois métodos principais
O JavaScript oferece uma interface chamada JSON que possui dois comandos fundamentais:

JSON.stringify() (Objeto ➔ String):

O que faz: Pega um objeto literal do seu código e o transforma em uma string formatada em JSON.

Uso: Você usa isso quando quer enviar dados do seu formulário ou sistema para serem salvos em um banco de dados.

JSON.parse() (String ➔ Objeto):

O que faz: Pega uma string de texto que está no formato JSON e a transforma novamente em um objeto literal.

Uso: Você usa isso quando recebe dados de um servidor e precisa acessar as propriedades (como .nome ou .idade) para mostrá-las na tela.

3. Exemplo Prático da Aula
O professor mostra que, embora visualmente pareçam iguais no console.log, o comportamento é diferente:

O Objeto permite acessar propriedades diretamente (ex: pessoa.nome).

A String JSON é apenas um texto corrido que pode ser transmitido pela rede.

Resumo da regra de ouro do vídeo:

Stringify: Converte objeto em string.

Parse: Converte string JSON em objeto.
*/