const select_cores = document.querySelector('#select_cores')
const btn_add_cor = document.querySelector('#btn_add_cor')
const total_cores = document.querySelector('#total_cores')
const paleta_container = document.querySelector('#paleta_container')

const cores = new Set()

btn_add_cor.addEventListener('click', () => {
    if(cores.has(select_cores.value)){
        alert(`Cor ${select_cores.value} já está na paleta`)
    } else {
        cores.add(select_cores.value)
        paleta_container.innerHTML += '<div class="cor-box" style="background-color: ' + select_cores.value + '"></div>'
        total_cores.innerHTML = cores.size
    }
})