const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const btn = document.querySelector('#btn_transferir')
const cursos = [...document.querySelectorAll('.curso')]

cursos.map((el) => {
    el.addEventListener('click', (evt) => {
        const tar = evt.target
        tar.classList.toggle('selecionado')
    })
})

btn.addEventListener('click', (evt) => {
    const selecionados = [...document.querySelectorAll('.selecionado')]
    const naoSelecionados = [...document.querySelectorAll('.curso:not(.selecionado)')]
    selecionados.map((el) => {
        caixa2.appendChild(el)
    })

    naoSelecionados.map((el) => {
        caixa1.appendChild(el)
    })
})