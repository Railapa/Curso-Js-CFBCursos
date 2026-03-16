const in_busca = document.querySelector('#in_busca')
const btn_buscar = document.querySelector('#btn_buscar')
const res_historico = document.querySelector('#res_historico')

const buscar = new Set()

btn_buscar.addEventListener('click', () => {
    res_historico.innerHTML = ''
    const busca = in_busca.value 

    if(buscar.has(busca)){
        alert('Esse produto da está no historico')
    } else if(busca == ''){
        alert('O campo está vazio')
    } else {
        buscar.add(busca)
        buscar.forEach((el) => {
            res_historico.innerHTML += `${el} <br/>`
        })
    }
})