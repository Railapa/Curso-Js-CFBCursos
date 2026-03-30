const itens = document.querySelector('#itens')
const peso_display = document.querySelector('#peso_display')
const btn_atualizar = document.querySelector('#btn_atualizar')

const inventario = {
    espada: 15,
    escudo: 20,
    pocao: 2,

    calcularPesoTotal(){
        const pesos = Object.values(this)

        let total = 0

        pesos.forEach((val) => {
            if(typeof val === 'number'){
                total += val
            }
        })

        return total
    }
}

inventario.capacete = 10

delete inventario.pocao

btn_atualizar.addEventListener('click', () => {
    peso_display.innerHTML = inventario.calcularPesoTotal()
})