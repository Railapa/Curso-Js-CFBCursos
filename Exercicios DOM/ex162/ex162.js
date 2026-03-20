const txt_telemovel = document.querySelector("#txt_telemovel")
const txt_computador = document.querySelector("#txt_computador")
const playlist_final = document.querySelector("#playlist_final")
const exclusivas_pc = document.querySelector("#exclusivas_pc")
const btn_sincronizar = document.querySelector("#btn_sincronizar")

const musicasTelemovel = ["Starboy", "Hells Bells", "Birds", "Hells Bells"];
const musicasPC = ["Hells Bells", "Birds", "Thunderstruck", "Levitating"];

const setTelemovel = new Set(musicasTelemovel)
const setPc = new Set(musicasPC)
const viagem = new Set([...setTelemovel, ...setPc])

setTelemovel.forEach((el) => {
    txt_telemovel.innerHTML += `${el} <br/>`
})

setPc.forEach((el) => {
    txt_computador.innerHTML += `${el} <br/>`
})

btn_sincronizar.addEventListener('click', () => {
    viagem.forEach((el) => {
        playlist_final.innerHTML += el + '<br/>'
    })

    exclusivas_pc.innerHTML = viagem.size
})