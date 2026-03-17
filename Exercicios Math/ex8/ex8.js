const res_rgb = document.querySelector('#res_rgb')
const btn_colorir = document.querySelector('#btn_colorir')

btn_colorir.addEventListener('click', () => {
    const n1 = Math.random() * 255
    const n2 = Math.random() * 255
    const n3 = Math.random() * 255

    const n1Inteiro = Math.round(n1)
    const n2Inteiro = Math.round(n2)
    const n3Inteiro = Math.round(n3)

    const mudarCor = `rgb(${n1Inteiro},${n2Inteiro},${n3Inteiro})`

    res_rgb.innerHTML = mudarCor
    document.body.style.backgroundColor = mudarCor
})