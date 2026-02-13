const input_tag = document.querySelector('#input-tag')
const btn_add = document.querySelector('#btn-add')
const btn_limpar = document.querySelector('#btn-limpar')
const display_tags = document.querySelector('#display-tags')
const info_tags = document.querySelector('#info-tags')

let tags = new Set()

let renderizar = () => {
    display_tags.innerHTML = ''
    tags.forEach((el) => {
        const novo_p = document.createElement('p')
        novo_p.classList.add('tag')
        novo_p.innerHTML = `#${el}`
        display_tags.appendChild(novo_p)
        let remover_novo_p = () => {
            novo_p.remove()
        }
        novo_p.addEventListener('click', () => {
            tags.delete(el)
            renderizar()
        })
    })
    info_tags.innerHTML = `Tags únicas: ${tags.size}`
}

btn_add.addEventListener('click', () => {
    const valor_input = input_tag.value.toLowerCase()
    if (valor_input != '') {
        tags.add(valor_input)
        renderizar()
        
    }
    input_tag.value = ''
    input_tag.focus()
})

btn_limpar.addEventListener('click', () => {
    tags.clear()
    renderizar()
})

