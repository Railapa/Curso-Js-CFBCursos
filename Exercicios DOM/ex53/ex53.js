const input_busca = document.querySelector('#input-busca')
const btn = document.querySelector('#btn-localizar')
const produto = [...document.querySelectorAll('.produto')]

const remover = () => {
    produto.map((el) => {
        el.classList.remove('encontrado')
    })
}

btn.addEventListener('click', () => {
    remover()
    const produtoAchado = produto.find((el) => {
        return el.innerHTML.toUpperCase() == input_busca.value.toUpperCase()
    })
    if (produtoAchado !== undefined) {
        produtoAchado.classList.add('encontrado')
    } else {
        alert('Produto não encontrado') 
    }


    input_busca.value = ''
    input_busca.focus()
})