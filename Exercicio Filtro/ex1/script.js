const in_filtro = document.querySelector('#in_filtro')
const cards = document.querySelectorAll('.card')

const filterFunction = () => {
    if(in_filtro.value !== ''){
        cards.forEach(card => {
            let titleCard = card.querySelector('h2')
            titleCard = titleCard.textContent.toLowerCase()

            let textFilter = in_filtro.value.toLowerCase()

            if(!titleCard.includes(textFilter)){
                card.style.display = 'none'
            } else {
                card.style.display = 'block'
            }
        })
    } else {
        cards.forEach(card => {
            card.style.display = 'block'
        })
    }
}




in_filtro.addEventListener('input', filterFunction)