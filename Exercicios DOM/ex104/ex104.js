class Veiculo{
    constructor(pmarca,pmodelo,pano){
        this.marca = pmarca
        this.modelo = pmodelo
        this.ano = pano
    }

    obterMarca(){
        return this.marca
    }

    obterModelo(){
        return this.modelo
    }

    obterAno(){
        return this.ano
    }
}

const input_marca = document.querySelector('#input_marca')
const inpu_modelo = document.querySelector('#inpu_modelo')
const input_ano = document.querySelector('#input_ano')
const lista_veiculos = document.querySelector('#lista_veiculos')
const btn_cadastrar = document.querySelector('#btn_cadastrar')

let veiculos = []

const addVeiculo = () => {
    lista_veiculos.innerHTML = ''
    veiculos.map((el) => {
        const div = document.createElement('div')
        div.setAttribute('class', 'card-veiculo')
        div.innerHTML = `Marca: ${el.obterMarca()} <br/> Modelo: ${el.obterModelo()} <br/> Ano: ${el.obterAno()}`
        lista_veiculos.appendChild(div)
    })
}

btn_cadastrar.addEventListener('click', () => {
    const novoVeiculo = new Veiculo(input_marca.value, inpu_modelo.value, input_ano.value)
    veiculos.push(novoVeiculo)
    addVeiculo()
})