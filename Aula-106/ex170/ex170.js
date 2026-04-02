const in_texto = document.querySelector('#in_texto')
const btn_search = document.querySelector('#btn_search')
const btn_match = document.querySelector('#btn_match')
const btn_replace = document.querySelector('#btn_replace')
const btn_digitos = document.querySelector('#btn_digitos')
const btn_espacos = document.querySelector('#btn_espacos')
const btn_intervalo = document.querySelector('#btn_intervalo')
const btn_mais = document.querySelector('#btn_mais')
const btn_zero_mais = document.querySelector('#btn_zero_mais')
const info_resultado = document.querySelector('#info_resultado')
const info_explicacao = document.querySelector('#info_explicacao')
const texto = 'O Professor Bruno do canal CFBCursos ensina Javascript em 2023. Contato: bruno@cfbcursos.com.br ou bruno123@gmail.com'

btn_search.addEventListener('click', () => {
    info_resultado.innerHTML = texto.search(/javascript/i)
    info_explicacao.innerHTML = 'Retorna a posição da primeira ocorrência. O modificador "i" ignora maiúsculas/minúsculas.'
})

btn_match.addEventListener('click', () => {
    info_resultado.innerHTML = texto.match(/o/ig)
    info_explicacao.innerHTML = 'Retorna um array com todas as ocorrências encontradas. O modificador "g" faz a busca global.'
})

btn_replace.addEventListener('click', () => {
    info_resultado.innerHTML = texto.replace(/Bruno/ig, 'Professor')
    info_explicacao.innerHTML = 'Substitui as ocorrências do padrão por um novo texto.'
})

btn_digitos.addEventListener('click', () => {
    info_resultado.innerHTML = texto.match(/\d/ig)
    info_explicacao.innerHTML = 'Metacaractere que encontra dígitos numéricos (0-9)'
})

btn_espacos.addEventListener('click', () => {
    info_resultado.innerHTML = texto.match(/\s/ig)
    info_explicacao.innerHTML = "<strong>\\s:</strong> Metacaractere que encontra espaços em branco, tabulações e quebras de linha."
})

btn_intervalo.addEventListener('click', () => {
    info_resultado.innerHTML = texto.match(/[a-c]/ig)
    info_explicacao.innerHTML = "<strong>[a-g]:</strong> Classe de caracteres que encontra qualquer letra entre 'a' e 'c'."
})

btn_mais.addEventListener('click', () => {
    info_resultado.innerHTML = texto.match(/\d+/ig)
    info_explicacao.innerHTML = "<strong>+:</strong> Quantificador que encontra uma ou mais ocorrências consecutivas (ex: agrupa dígitos em números inteiros)."
})

btn_zero_mais.addEventListener('click', () => {
    info_resultado.innerHTML = texto.match(/br*/ig)
    info_explicacao.innerHTML = "<strong>*:</strong> Quantificador que encontra zero ou mais ocorrências do caractere anterior."
})