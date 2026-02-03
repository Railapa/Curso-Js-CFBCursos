const todosArquivos = [...document.querySelectorAll('.arquivo')]
const container = document.querySelector('#container-arquivos')
const btn = document.querySelector('#btn-remover-selecionados')

todosArquivos.map((arq) => {
    arq.addEventListener('click', () => {
        arq.classList.toggle('selecionado')
    })
})


btn.addEventListener('click', () => {
    

    const paraRemover = todosArquivos.filter((el) => {
        return el.classList.contains('selecionado')
    })

    
    paraRemover.map((item) => {
        container.removeChild(item)
    })
})