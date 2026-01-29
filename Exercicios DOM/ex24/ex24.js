const pergunta = [...document.querySelectorAll('.pergunta')]
const resposta = [...document.querySelectorAll('.resposta')]

pergunta.map((el) => {
    el.addEventListener('click', (evt) => {
        evt.target.nextElementSibling.classList.toggle('mostrar')
    })
})