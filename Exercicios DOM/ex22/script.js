const btn = [...document.querySelectorAll('.btn-destaque')]

btn.map((el) => {
    el.addEventListener('click', (evt) => {
         const tgt = evt.target.parentElement.parentElement
         tgt.classList.toggle('destacado')
    })
})