const filter = document.querySelector('#filter')
const cards = document.querySelectorAll('.cards li')

const functionFilter = () => {
  if(filter.value !== ''){
    cards.forEach(card => {
      let titlecard = card.querySelector('h2')
      titlecard = titlecard.textContent.toLowerCase()

      let textFilter = filter.value.toLowerCase()

      if(!titlecard.includes(textFilter)){
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

filter.addEventListener('input', functionFilter)