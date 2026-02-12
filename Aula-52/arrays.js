const caixa = document.querySelector('#caixa')
let cores = ['azul', 'verde', 'vermelho', ['claro', 'escuro', 'medio']]
let cursos = ['HTML', 'CSS', 'JavaScript', cores]

// //cursos[0] = 'PHP' (mudar o conteudo de um elemento do array)

// cursos.push('Phython') // adicionar elemento no final de um array

// cursos.pop() // Remove o ultimo elemento do array

// cursos.unshift('React') // Adicionar elemnto no inicio do array

// cursos.shift() // Remove o primeiro elemnto do array

console.log(cursos[3][1]) // exibe o elemento 'verde' no console

console.log(cores[3][0]) // exibe 'verde' e 'claro' no console

cursos.map((el) => {
    let p = document.createElement('p')
    p.innerHTML = el
    caixa.appendChild(p)
})

/* 
1. O que é um Array?
Um Array é uma coleção de dados ou variáveis armazenadas numa única estrutura. Ao contrário de outras linguagens, no JavaScript um Array é flexível: podes guardar qualquer tipo de dado (Strings, Números, Objetos, Funções e até outros Arrays) na mesma coleção.

2. Declaração e Acesso
Declaração: Utilizam-se parênteses retos []. Exemplo: let cursos = ["HTML", "CSS", "JS"].

Índices: A contagem começa sempre no 0. Para aceder ao primeiro elemento, usas cursos[0].

Alteração: Podes substituir um valor indicando a sua posição: cursos[0] = "C++".

3. Métodos de Manipulação (Adicionar e Remover)
O professor Bruno apresenta quatro métodos essenciais para gerir os elementos:

push(): Adiciona um elemento no final do Array.

pop(): Remove o último elemento do Array.

unshift(): Adiciona um elemento no início do Array.

shift(): Remove o primeiro elemento do Array.

4. Matrizes (Arrays Multidimensionais)
Podes colocar um Array dentro de outro, criando níveis ou "matrizes". Para aceder a dados profundos, vais adicionando índices:

cursos[3][1] acede ao segundo item do Array que está na quarta posição da lista principal.
*/