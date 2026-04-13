const slider = document.querySelectorAll('.slider')
const btnPrev = document.querySelector('#prev_button')
const btnNext = document.querySelector('#next_button')

let currentSlide = 0

const hideSlider = () => {
    slider.forEach(item => {
        item.classList.remove('on')
    })
}

const showSlide = () => {
    slider[currentSlide].classList.add('on')
}

const nextSlide = () => {
    hideSlider()
    if(currentSlide === slider.length -1){
        currentSlide = 0
    } else {
        currentSlide++
    }
    showSlide()
}

const prevSlide = () => {
    hideSlider()
    if(currentSlide === 0){
        currentSlide = slider.length -1
    } else {
        currentSlide--
    }
    showSlide()
}

btnNext.addEventListener('click', () => {
    nextSlide()
})

btnPrev.addEventListener('click', () => {
    prevSlide()
})