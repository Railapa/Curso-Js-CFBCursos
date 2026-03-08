const lista_completa = document.querySelector('#lista_completa')
const lista_critica = document.querySelector('#lista_critica')
const btn_filtrar = document.querySelector('#btn_filtrar')

const array_temp = [25, 42, 55, 68, 30, 51, 10, 75, 48]
lista_completa.innerHTML = array_temp

btn_filtrar.addEventListener('click', () => {
    const temp_alerta = array_temp.filter((val) => {
        if(val > 50){
            return true
        } else {
            return false
        }
    })
    
    lista_critica.innerHTML = temp_alerta
})