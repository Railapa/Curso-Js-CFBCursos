const txt_nome = document.querySelector('#txt_nome')
const txt_x = document.querySelector('#txt_x')
const txt_w = document.querySelector('#txt_w')
const txt_y = document.querySelector('#txt_y')
const txt_h = document.querySelector('#txt_h')
const obj_red = document.querySelector('#obj_red')
const obj_blue = document.querySelector('#obj_blue')

const info = (el, nome) => {
    let rect = el.getBoundingClientRect() 
    txt_nome.innerHTML = nome
    txt_x.innerHTML = rect.x
    txt_y.innerHTML = rect.y
    txt_w.innerHTML = rect.width
    txt_h.innerHTML = rect.height
}

obj_red.addEventListener('click', () => {
    info(obj_red, 'Quadrado Vermelho')
})

obj_blue.addEventListener('click', () => {
    info(obj_blue, 'Quadrado Azul')
})