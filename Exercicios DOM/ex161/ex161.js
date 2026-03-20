const in_tag = document.querySelector('#in_tag')
const btn_add = document.querySelector('#btn_add')
const total_tags = document.querySelector('#total_tags')
const lista_tags = document.querySelector('#lista_tags')
const btn_limpar = document.querySelector('#btn_limpar')

const addTag = new Set()

btn_add.addEventListener('click', () => {
    const tag = in_tag.value

    if (addTag.has(tag)) {
        alert(`A tag ${tag} já está na lista.`)
    } else if (in_tag.value == '') {
        alert('Adicione alguma tag')
    } else {
        lista_tags.innerHTML = ''
        addTag.add(tag)
        addTag.forEach((el) => {
            lista_tags.innerHTML += `Tag: ${el} <br/>`
        })

        total_tags.innerHTML = addTag.size
    }
})

btn_limpar.addEventListener('click', () => {
    lista_tags.innerHTML = ''
})