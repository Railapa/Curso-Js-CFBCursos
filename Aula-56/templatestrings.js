const canal = 'CFB Cursos'
const curso = 'JavaScript'

const frase = `Este é o curso de ${curso} do canal ${canal}`
console.log(frase)

/* 
1. O que são Template Strings?
É uma nova forma de tratar strings que facilita a junção de texto com variáveis.

Marcador: Em vez de aspas simples (') ou duplas ("), as Template Strings usam a crase (`).

Interpolação de Variáveis: Para inserir o conteúdo de uma variável ou constante dentro do texto, utiliza-se a sintaxe ${variável}.

2. Vantagens Práticas
Concatenação Simples: Não precisas de fechar e abrir aspas constantemente nem de usar o operador + para juntar variáveis.

Quebras de Linha: Podes dar "Enter" diretamente no código dentro das crases. Embora no HTML (DOM) precises de usar <br> para que a quebra apareça na página, no console.log a quebra de linha é respeitada naturalmente.

Construção de HTML: É excelente para criar blocos de HTML dinamicamente, como listas (<ul>, <li>), mantendo o código muito mais legível.
*/