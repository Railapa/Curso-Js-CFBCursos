const filter = document.querySelector('#filter')
const cards = document.querySelectorAll('.cards li')

const functionFilter = () => {
  cards.forEach(card => {
    if (filter.value != '') {
      let titleCard = card.querySelector('h2')
      titleCard = titleCard.textContent.toLowerCase()

      const textFilter = filter.value.toLowerCase()

      if(titleCard.includes(textFilter)){
        card.style.display = 'block'
      } else {
        card.style.display = 'none'
      }
    } else {
      cards.forEach(card => {
        card.style.display = 'block'
      })
    }
  })
}

filter.addEventListener('input', functionFilter)