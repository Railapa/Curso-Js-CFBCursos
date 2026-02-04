const adicionarNome = document.querySelector('#novo-nome')
const btnAntes = document.querySelector('#btn-antes')
const btnDepois = document.querySelector('#btn-depois')
const btnRemover = document.querySelector('#btn-remover')
const nomes = [...document.querySelectorAll('.pessoa')]
const listaNomes = document.querySelector('#lista-fila')

nomes.map((el) => {
    el.addEventListener('click', () => {
        el.classList.toggle('selecionado')
    })
})

btnRemover.addEventListener('click', () => {
    const nomesSelecionados = nomes.filter((val) => {
        return val.classList.contains('selecionado')
    })
    if(nomesSelecionados.length > 0){
        nomesSelecionados[0].remove()
    } else {
        alert("Selecione alguem para remover")
    }
    
})

btnAntes.addEventListener('click', () => {
    const nomesSelecionados = nomes.filter((val) => {
        return val.classList.contains('selecionado')
    })

    if(adicionarNome.value != 0 && nomesSelecionados.length > 0){
        const novoItem = document.createElement('li')
        novoItem.setAttribute('class', 'pessoa')
        novoItem.innerHTML = adicionarNome.value

        novoItem.addEventListener('click', () => {
            novoItem.classList.toggle('selecionado')
        })

        listaNomes.insertBefore(novoItem, nomesSelecionados[0])

        adicionarNome.value = ''
        adicionarNome.focus()
    } else {
        alert('Digite um nome e selecione uma pessoa na lista')
    }
})

btnDepois.addEventListener('click', () => {
     const nomesSelecionados = nomes.filter((val) => {
        return val.classList.contains('selecionado')
    })

    if(adicionarNome.value != 0 && nomesSelecionados.length > 0){
        const novoItem = document.createElement('li')
        novoItem.setAttribute('class', 'pessoa')
        novoItem.innerHTML = adicionarNome.value

        novoItem.addEventListener('click', () => {
            novoItem.classList.toggle('selecionado')
        })

        listaNomes.insertBefore(novoItem, nomesSelecionados[0].nextSibling)

        adicionarNome.value = ''
        adicionarNome.focus()
    } else {
        alert('Digite um nome e selecione uma pessoa na lista')
    }
})