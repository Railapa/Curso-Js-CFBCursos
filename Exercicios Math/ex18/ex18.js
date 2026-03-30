const btn_floor = document.querySelector('#btn_floor')
const btn_ceil = document.querySelector('#btn_ceil')
const res_math = document.querySelector('#res_math')
const dado_valor = document.querySelector('#dado_valor')
const btn_sortear = document.querySelector('#btn_sortear')


btn_floor.addEventListener('click', () => {
    res_math.innerHTML = Math.floor(9.81)
})

btn_ceil.addEventListener('click', () => {
    res_math.innerHTML = Math.ceil(9.81)
})

btn_sortear.addEventListener('click', () => {
    dado_valor.innerHTML = Math.floor((Math.random() * 6) + 1)
})