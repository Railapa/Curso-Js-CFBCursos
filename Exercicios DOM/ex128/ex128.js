const btn_media = document.querySelector('#btn_media')
const display_media = document.querySelector('#display_media')
const notas = [7, 8, 10, 5];

btn_media.addEventListener('click', () => {
    const media = notas.reduce((atu, ant) => {
        return atu + ant
    })

    display_media.innerHTML = media / notas.length.toFixed(2)
})