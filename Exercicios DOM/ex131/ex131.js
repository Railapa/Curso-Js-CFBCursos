const btn_find = document.querySelector('#btn_find')
const resultado_busca = document.querySelector('#resultado_busca')
const input_placa = document.querySelector('#input_placa')

const carros = [
    { placa: "ABC-123", modelo: "Civic", cor: "Prata" },
    { placa: "XYZ-987", modelo: "Onix", cor: "Preto" },
    { placa: "KJH-456", modelo: "Fusca", cor: "Azul" }
]

btn_find.addEventListener('click', () => {
    const placa = carros.find((val) => {
        return val.placa.toUpperCase() === input_placa.value.toUpperCase()
    })

    if(placa){
        resultado_busca.innerHTML = `Veiculo: ${placa.modelo} <br/> Cor: ${placa.cor}`
    } else if(input_placa.value == '') {
        alert('Digite a placa do seu carro')
    } else {
        resultado_busca.innerHTML = 'Veiculo não encontrado'
    }
})