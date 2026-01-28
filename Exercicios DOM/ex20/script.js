const btns = [...document.getElementsByTagName('button')]

btns.map((el) => {
    el.addEventListener('click', (evt) => {
        evt.target.parentElement.remove()
    })
})