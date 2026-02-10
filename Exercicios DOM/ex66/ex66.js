const tags = ["futebol", "ferias", "sol", "bahia"]
const btn = document.querySelector('#btn-hashtag')
const resultado = document.querySelector('#txt-hashtags')

btn.addEventListener('click', () => {
    const tagsComHashtags = tags.reduce((ant,atu) => {
        return ant + ' #' + atu
    }, '')

    resultado.innerHTML = tagsComHashtags
})