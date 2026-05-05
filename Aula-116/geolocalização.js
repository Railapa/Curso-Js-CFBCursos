const long = document.querySelector('.long')
const lati = document.querySelector('.lati')

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(mostrarLocalizacao, erroLocalizacao)
} else {
    console.log('erro')
}

function mostrarLocalizacao(pos){
    lati.innerHTML = `Latitude: ${pos.coords.latitude}`
    long.innerHTML = `Longitude: ${pos.coords.longitude}`
}

function erroLocalizacao(pos){
    console.log('erro')
}