const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const btn = document.querySelector('#btn_transferir')
const todosCursos = [...document.querySelectorAll('.curso')]

for(el of todosCursos){
    el.addEventListener('click', (evt) => {
        const curso = evt.target
        curso.classList.toggle("selecionado")
    })
}

btn.addEventListener('click', () => {
    const selecionados = [...document.querySelectorAll('.selecionado')]
    const naoSelecionados = [...document.querySelectorAll('.curso:not(.selecionado)')]
    console.log(el.parentElement)
    
    for(el of selecionados){
        caixa2.appendChild(el)
    }

    for (el of naoSelecionados){
        caixa1.appendChild(el)
    }
   
})