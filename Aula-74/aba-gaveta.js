const teclasNum = [...document.querySelectorAll('.num')]
const teclasOp = [...document.querySelectorAll('.op')]
const teclaRes = document.querySelector('.res')
const display = document.querySelector('.display')
const ton = document.querySelector('#ton')
const tlimpar = document.querySelector('#tlimpar')
const tigual = document.querySelector('#tigual')
const calc_aba = document.querySelector('#calc_aba')
const calc = document.querySelector('#calc')
const img_aba_calc = document.querySelector('#img_aba_calc')

let sinal = false
let decimal = false

teclasNum.map((el) => {
    el.addEventListener('click', (evt) => {
        sinal = false
        if (evt.target.innerHTML == ',') {
            if (!decimal) {
                decimal = true
                if(display.innerHTML == '0'){
                    display.innerHTML = ''

                } else{
                    display.innerHTML += evt.target.innerHTML
                }
            }
        } else {
            display.innerHTML += evt.target.innerHTML
        }
    })
})

teclasOp.map((el) => {
    el.addEventListener('click', (evt) => {
        if (!sinal) {
            sinal = true
            if (display.innerHTML == '0') {
                display.innerHTML = ''
            }
            if (evt.target.innerHTML == 'x') {
                display.innerHTML += '*'
            } else {
                display.innerHTML += evt.target.innerHTML
            }

        }
    })
})

tlimpar.addEventListener('click', () => {
    sinal = false
    decimal = false
    display.innerHTML = '0'
})

tigual.addEventListener('click', () => {
    sinal = false
    decimal = false
    const res = eval(display.innerHTML)
    display.innerHTML = res
})

calc_aba.addEventListener('click', (evt) => {
    calc.classList.toggle('calc_exibir')
    if(calc.classList.contains('calc_exibir')){
        evt.target.setAttribute('src', 'seta13.svg')
    } else {
        evt.target.setAttribute('src', 'seta22.svg')
    }
}) 