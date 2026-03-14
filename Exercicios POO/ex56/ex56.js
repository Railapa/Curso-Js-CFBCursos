const in_litros = document.querySelector('#in_litros')
const in_consumo = document.querySelector('#in_consumo')
const btn_calcular = document.querySelector('#btn_calcular')
const painel_viagem = document.querySelector('#painel_viagem')
const res_km = document.querySelector('#res_km')

class Autonomia{
    constructor(litros, kmlitro){
        this.litros = litros
        this.kmlitro = kmlitro
    }

    calcularAutonomia(){
        return this.litros * this.kmlitro
    }
}

btn_calcular.addEventListener('click', () => {
    const novaAutonomia = new Autonomia(in_litros.value, in_consumo.value)

    painel_viagem.style.display = 'block'
    res_km.innerHTML = novaAutonomia.calcularAutonomia()
})