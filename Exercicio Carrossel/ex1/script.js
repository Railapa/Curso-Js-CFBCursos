var swiper = new Swiper(".swiper", {
    loop: true,
    grabCursor: true,
    centeredSlides: true, 
    initialSlide: 0,
    slidesPerView: 1, 
    spaceBetween: 50, // Adiciona 50px de espaço entre os slides invisíveis
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true
    },
    // Garante que o espaço se mantenha em diferentes telas
    breakpoints: {
        768: {
            spaceBetween: 40
        },
        1024: {
            spaceBetween: 50
        }
    }
});