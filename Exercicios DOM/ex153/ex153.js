const in_nome = document.querySelector('#in_nome')
const btn_adicionar = document.querySelector('#btn_adicionar')
const btn_limpar = document.querySelector('#btn_limpar')
const res_set = document.querySelector('#res_set')
const total_convidados = document.querySelector('#total_convidados')

const addConvidado = new Set()

btn_adicionar.addEventListener('click', () => {
    res_set.innerHTML = ''
    const nome = in_nome.value.trim()

    if(addConvidado.has(nome)){
        alert(`O convidado ${nome} já está na lista`)
    } else if (nome == ''){
        alert('Digite o nome do convidade')
    } else {
        addConvidado.add(nome)
        addConvidado.forEach((el) => {
            res_set.innerHTML += `Convidado: ${el} <br/>`
        })
    }
})

btn_limpar.addEventListener('click', () => {
    res_set.innerHTML = 'Nenhum convidado na lista.'
})