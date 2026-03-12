const input_nome = document.querySelector('#input_nome')
const btn_adicionar = document.querySelector('#btn_adicionar')
const input_busca = document.querySelector('#input_busca')
const lista_exibicao = document.querySelector('#lista_exibicao')

const addNome = new Set()

btn_adicionar.addEventListener('click', () => {
    const nome = input_nome.value

    if(addNome.has(nome)){
        alert(`O nome ${nome} já está na lista`)
    } else if(nome == ''){
        alert('Por favor, digite um nome')
    } else {
        addNome.add(nome)
        lista_exibicao.innerHTML += `<li>${nome}</li> <br/>`
    }
})

input_busca.addEventListener('input', () => {
    const arrayNomes = [...addNome]

    const filtro = arrayNomes.filter((val) => {
        return val.includes(input_busca.value)
    })

    lista_exibicao.innerHTML = ''
    filtro.forEach((el) => {
        lista_exibicao.innerHTML += `<li>${el}<li/>`
    })
})