const res_premio = document.querySelector('#res_premio')
const btn_sortear = document.querySelector('#btn_sortear')

const premios = ['💻 PC Gamer', '📱 iPhone', '🎧 Headset', '🖱️ Mouse Pad', '🍫 Chocolate']

btn_sortear.addEventListener('click', () => {
    const premiosLength = premios.length

    const gerarNum = Math.floor(Math.random() * premiosLength)

    res_premio.innerHTML = premios[gerarNum]
})