const btn_mesclar = document.querySelector('#btn_mesclar')
const res = document.querySelector('#res')

const padrao = {
    valome: 50,
    brilho: 80,
    tema: 'Dark'
}

const usuario = {
    valome: 100
}

const extra = {
    versao: '1.0.2'
}

btn_mesclar.addEventListener('click', () => {
    const confihFinal = Object.assign({}, padrao, usuario, extra)

    res.innerHTML = confihFinal.versao
})