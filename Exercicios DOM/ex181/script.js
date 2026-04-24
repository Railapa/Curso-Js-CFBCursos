const busca = document.querySelector('#busca')
const lista = document.querySelector('#lista')
const titles = document.querySelectorAll('#lista li')

const filterElements = () => {
    if(busca.value != ''){
        titles.forEach(title => {
            let titleText = title.textContent.toLowerCase()

            let textFilter = busca.value.toLowerCase()

            if(titleText.includes(textFilter)){
                title.style.display = 'block'
            } else {
                title.style.display = 'none'
            }
        })
    } else {
        titles.forEach(title => {
            title.style.display = 'block'
        })
    }
}

busca.addEventListener('input', filterElements)