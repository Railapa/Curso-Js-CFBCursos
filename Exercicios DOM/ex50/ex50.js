const nomeItem = document.querySelector('#input-item')
const btnAntes = document.querySelector('#btn-antes')
const btnDepois = document.querySelector('#btn-depois')
const caixaItens = document.querySelector('#caixa-itens')

const getSelecionado = () => {
    return document.querySelector('.selecionado')
}

const tirarSelecao = () => {
    const itens = [...document.querySelectorAll('.item')]
    itens.map((el) => {
        el.classList.remove('selecionado')
    })
}

const itensIniciais = [...document.querySelectorAll('.item')]
itensIniciais.map((el) => {
    el.addEventListener('click', (evt) => {
        tirarSelecao()
        evt.target.classList.add('selecionado')
    })
})

btnAntes.addEventListener('click', () => {
    const sel = getSelecionado()
    if (nomeItem.value !== '' && sel != null) {
        const novaDiv = document.createElement('div')
        novaDiv.setAttribute('class', 'item')
        novaDiv.innerHTML = nomeItem.value

        novaDiv.addEventListener('click', (evt) => {
            tirarSelecao()
            evt.target.classList.add('selecionado')
        })

        caixaItens.insertBefore(novaDiv, sel)

        nomeItem.value = ''
        nomeItem.focus()
    } else {
        alert('Digite um nome e selecione algum item')
    }

})

btnDepois.addEventListener('click', () => {
    const sel = getSelecionado()
    if (nomeItem.value !== '' && sel != null) {
        const novaDiv = document.createElement('div')
        novaDiv.setAttribute('class', 'item')
        novaDiv.innerHTML = nomeItem.value

        novaDiv.addEventListener('click', (evt) => {
            tirarSelecao()
            evt.target.classList.add('selecionado')
        })

        caixaItens.insertBefore(novaDiv, sel.nextSibling)

        nomeItem.value = ''
        nomeItem.focus()
    } else {
        alert('Digite um nome e selecione algum item')
    }

})