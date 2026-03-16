const in_marca = document.querySelector('#in_marca')
const in_modelo = document.querySelector('#in_modelo')
const btn_exibir = document.querySelector('#btn_exibir')
const painel_carro = document.querySelector('#painel_carro')
const res_detalhes = document.querySelector('#res_detalhes')

class Veiculo{
    constructor(marca){
        this.marca = marca
    }
}

class Modelo extends Veiculo{
    constructor(marca,modelo){
        super(marca)
        this.modelo = modelo
    }

    statusVeiculo(){
        return `Marca: ${this.marca} <br/> Modelo: ${this.modelo}`
    }
}


btn_exibir.addEventListener('click', () => {
    const novoVeiculo = new Modelo(in_marca.value, in_modelo.value)
    painel_carro.style.display = 'block'
    res_detalhes.innerHTML = novoVeiculo.statusVeiculo()
})