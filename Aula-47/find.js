const p_array = document.querySelector('#array')
const txt_pesquisar = document.querySelector('#txt_pesquisar')
const btnPesquisar = document.querySelector('#btnPesquisar')
const resultado = document.querySelector('#resultado')

const elementos_array = ['html', 'css', 'javascipt', 'react']
p_array.innerHTML = `[${elementos_array}]`

btnPesquisar.addEventListener('click', (evt) => {
    resultado.innerHTML = 'Valor não encontrado </br>'
    const retorno = elementos_array.find((e, i) => {
        if (e.toUpperCase() === txt_pesquisar.value.toUpperCase()) {
            resultado.innerHTML = `Valor encontrado: ${e} na posição ${i} </br>`
            return e
        }
    })
    console.log(retorno)
    txt_pesquisar.value = ''
    txt_pesquisar.focus()
})

/*
1. O que é o método find()?
Diferente do filter() (que cria uma lista nova com tudo o que encontrou), o find() foca em ser rápido:

Ele percorre o array e retorna apenas o primeiro elemento que satisfizer a condição da sua função.

Assim que ele encontra o item, ele para a busca imediatamente e retorna o valor encontrado.

Se ele percorrer todo o array e não encontrar nada, ele retorna undefined.

2. A Sintaxe
O find() recebe uma função de callback que testa cada elemento:

JavaScript
const achado = meuArray.find((elemento, indice) => {
    return elemento == "o que eu procuro"
})
elemento: O item que está sendo testado no momento.

índice: A posição desse item no array (0, 1, 2...).

3. Diferença Crucial: Texto vs. Número
No vídeo, o professor mostra que ao pesquisar textos, é uma boa prática usar o .toUpperCase() tanto no item do array quanto no que o usuário digitou. Isso garante que, se o usuário digitar "javascript" em minúsculo, ele encontre "JavaScript" mesmo que esteja gravado diferente no array.
*/