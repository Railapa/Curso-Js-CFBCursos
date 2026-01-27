const btn = document.querySelector('#btn-like')

btn.addEventListener('click', (evt) => {
    btn.classList.toggle('curtido')
})