const btn_curtos = document.querySelector('#btn_curtos')
const btn_letra = document.querySelector('#btn_letra')
const resultado_filtro = document.querySelector('#resultado_filtro')
const lista_original = document.querySelector('#lista_original')

const array_convidados = ["Ana", "Paulo", "Bia", "Alex", "Roberto", "Aline", "Tom", "Bruna"]

btn_letra.addEventListener('click', () => {
    const nome_a = array_convidados.filter((val) => {
        if(val.startsWith('A')){
            return true
        } else {
            return false
        }
    })

    resultado_filtro.innerHTML = nome_a
})

btn_curtos.addEventListener('click', () => {
    const nomes_curtos = array_convidados.filter((val) => {
        if(val.length <= 4){
            return true
        } else {
            return false
        }
    })

    resultado_filtro.innerHTML = nomes_curtos
})