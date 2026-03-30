const display = document.querySelector('#display')
const btn_atacar = document.querySelector('#btn_atacar')
const log = document.querySelector('#log')

btn_atacar.addEventListener('click', () => {
    const ataqueDiferido = Math.floor((Math.random() * 100) + 1)

    if(ataqueDiferido >= 85){
        display.innerHTML = ataqueDiferido
        log.innerHTML = 'Ataque Critico'
        display.classList.add('critico')
    } else {
        display.classList.remove('critico')
        display.innerHTML = ataqueDiferido
        log.innerHTML = 'Ataque Normal'
    }
})