const bebidas = ["Vinho", "Água", "Café", "Suco"]
const btn = document.querySelector('#btn-verificar')
const resultado = document.querySelector('#resultado-vip')
const lista = document.querySelector('#lista')
lista.innerHTML = bebidas

btn.addEventListener('click', () => {
    const temAlcool = bebidas.some((el, ind) => {
        return el == 'Vinho' 
    })
   

    if(temAlcool){
        resultado.innerHTML = 'Atenção: Contém bebidas alcoólicas!'
        resultado.classList.add('alerta')
    } else {
        resultado.innerHTML = 'Lista segura: Apenas bebidas não alcoólicas'
        resultado.classList.add('seguro')
    }
})