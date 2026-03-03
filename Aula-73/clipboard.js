const teclasNum = [...document.querySelectorAll('.num')]
const teclasOp = [...document.querySelectorAll('.op')]
const teclaRes = document.querySelector('.res')
const display = document.querySelector('.display')
const ton = document.querySelector('#ton')
const tlimpar = document.querySelector('#tlimpar')
const tigual = document.querySelector('#tigual')
const tcpy = document.querySelector('#tcpy')
const teste = document.querySelector('#teste')

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

tcpy.addEventListener('click', () => {
    //navigator.clipboard.writeText(display.innerHTML) - para paragrafos e outros

    teste.select() 
    teste.setSelectionRange(0, 99999999) // mobile
    navigator.clipboard.writeText(teste.value) // para inputs
})