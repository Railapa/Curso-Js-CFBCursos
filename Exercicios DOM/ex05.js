const c1 = document.querySelector('#c1')
const c2 = document.querySelector('#c2')
const cursos = [...document.querySelectorAll('.curso')]

c1.addEventListener('click', () => {
    alert('Você clicou no primeiro curso!')
})

c2.addEventListener('mouseover', () => {
    c2.style.backgroundColor = 'yellow'                   
})

c2.addEventListener('mouseout', () => {
    c2.style.backgroundColor = 'white'
})

for(c of cursos){
    c.addEventListener('click', (evt) => {
        const target = evt.target
        target.innerHTML += ' - Selecionado'
        target.style.backgroundColor = 'blue'
        target.style.color = 'white'
    })
}