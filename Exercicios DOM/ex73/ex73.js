const temps = [25, 32, 45, 28]
const btn = document.querySelector('#btn-checar-maquina')
const msg = document.querySelector('#alerta-maquina')

const removerClasse = () => {
    msg.classList.remove('perigo')
}

btn.addEventListener('click', () => {
    const tempsVerdadeiro = temps.some((el) => {
        return el > 40
    })

    if(tempsVerdadeiro){
        removerClasse()
        msg.innerHTML = `ALERTA: Máquina superaquecida`
        msg.classList.add('perigo')
    } else {
         msg.innerHTML = `Temperatura Estável`
         msg.classList.add('seguro')
    }
})