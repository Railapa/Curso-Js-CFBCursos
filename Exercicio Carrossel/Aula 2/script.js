const slider = document.querySelectorAll('.slider')
const btnPrev = document.querySelector('#prev_button')
const btnNext = document.querySelector('#next_button')

let currentSlide = 0

const hideSlider = () => {
    slider.forEach(item => {
        item.classList.remove('on')
    })
}

const showSlider = () => {
    slider[currentSlide].classList.add('on')
}

const nextSlider = () => {
    hideSlider()
    if(currentSlide === slider.length -1){
        currentSlide = 0
    } else {
        currentSlide++
    }

    showSlider()
}

const prevSlider = () => {
    hideSlider()
    if(currentSlide === 0){
        currentSlide = slider.length -1
    } else {
        currentSlide--
    }

    showSlider()
}

btnNext.addEventListener('click', () => {
    nextSlider()
})

btnPrev.addEventListener('click', () => {
    prevSlider()
})