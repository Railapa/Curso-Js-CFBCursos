const in_min = document.querySelector('#in_min')
const in_max = document.querySelector('#in_max')
const res_sorteio = document.querySelector('#res_sorteio')
const btn_sortear = document.querySelector('#btn_sortear')

btn_sortear.addEventListener('click', () => {
    const numMin = Number(in_min.value)
    const numMax = Number(in_max.value)

    const res = (Math.random() * (numMax - numMin)) + numMin
    res_sorteio.innerHTML = Math.round(res)
})