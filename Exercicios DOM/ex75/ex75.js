const slides = ["Conceito de Iteradores", "Entendendo o Symbol.iterator", "Praticando com .next()"]
const btn = document.querySelector('#btn-proximo-slide')
const msg = document.querySelector('#texto-slide')

const it_slides = slides[Symbol.iterator]()

btn.addEventListener('click', () => {
    const slidesit = it_slides.next()

    if(slidesit.done){
        msg.innerHTML = 'Fim dos slides!'
        btn.disabled = true
    } else {
        msg.innerHTML = slidesit.value
    }
    
})