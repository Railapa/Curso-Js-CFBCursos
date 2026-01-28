const caixas = [...document.querySelectorAll('.caixa')]
const btn = document.querySelector('#btn-verificar')

btn.addEventListener('click', () => {
    caixas.map((el) => {
        if(el.children.length > 0){
            el.style.backgroundColor = 'lightgreen'
        } else {
            el.style.backgroundColor = 'lightsalmon'
        }
    })
})