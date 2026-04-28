const inputNome = document.querySelector('#inputNome')
const btnBuscar = document.querySelector('#btnBuscar')
const msgBusca = document.querySelector('#msgBusca')

const nomes = ['Raí', 'Lapa', 'Souza', 'JS', 'Bahia']

btnBuscar.addEventListener('click', () => {
    const nome = inputNome.value 
    if(nomes.includes(nome)){
        msgBusca.innerHTML = 'Membro encontrado!'
    } else {
        msgBusca.innerHTML = 'Não faz parte da equipe'
    }
})
