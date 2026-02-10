const playlist = ["Tempos Modernos", "Eduardo e Mônica", "Hip-Hop Real", "Infinita Highway"]
const btn = document.querySelector('#btn-next')
const msg = document.querySelector('#msg-playlist')
const i_playlist = playlist[Symbol.iterator]()


btn.addEventListener('click', () => {
    const musica = i_playlist.next()
    
    if(musica.done){
        msg.innerHTML = 'Fim da Playlist'
        btn.disabled = true
    } else {
        msg.innerHTML = musica.value
    }
})