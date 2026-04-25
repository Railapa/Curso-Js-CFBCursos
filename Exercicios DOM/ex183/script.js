const miniatura = document.querySelectorAll('.miniatura')
const fotoPrincipal = document.querySelector('#fotoPrincipal')

miniatura.forEach(img => {
    img.addEventListener('click', () => {
        fotoPrincipal.src = img.src
    })
})