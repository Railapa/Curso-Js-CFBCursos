const textoDica = document.querySelector('#texto-dica')
const btn = document.querySelector('#btn-toggle')

btn.addEventListener('click', (evt) => {
    if(textoDica.style.display === 'none'){
        textoDica.style.display = 'block'
        btn.innerHTML = 'Esconder Dica'
    } else {
        textoDica.style.display = 'none'
        btn.innerHTML = 'Mostrar Dica'
    }
})
