const item = [...document.querySelectorAll('.item')]
const btn = document.querySelector('#btn-importante')

btn.addEventListener('click', () => {
    const itemPericivel = item.filter((val) => {
        return val.classList.contains('perecivel')
    })
    
    itemPericivel.map((el) => {
        el.classList.toggle('urgente')
    })
})

