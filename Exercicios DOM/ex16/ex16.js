const js = document.querySelector('#btn-js')
const html = document.querySelector('#btn-html')
const css = document.querySelector('#btn-css')
const caixaDescricao = document.querySelector('#caixa-descricao')

js.addEventListener('click', (evt) => {
    caixaDescricao.innerHTML = 'Lógica e interatividade'
})

html.addEventListener('click', (evt) => {
    caixaDescricao.innerHTML = 'Estrutura da página'
})

css.addEventListener('click', (evt) => {
    caixaDescricao.innerHTML = 'Estilo e design'
})