const btn_buscar = document.querySelector('#btn_buscar')
const input_cor = document.querySelector('#input_cor')
const resultado = document.querySelector('#resultado')

const paleta = [
    { pt: "azul", en: "blue" },
    { pt: "verde", en: "green" },
    { pt: "vermelho", en: "red" },
    { pt: "amarelo", en: "yellow" },
    { pt: "preto", en: "black" }
]

btn_buscar.addEventListener('click', () => {
    const corFiltrada = paleta.find((e,i) => {
        return input_cor.value.toUpperCase() === e.pt.toUpperCase()
    })

    if(corFiltrada){
        resultado.innerHTML = `Cor Selecionada: ${input_cor.value}`
        document.body.style.backgroundColor = corFiltrada.en
    } else {
        resultado.innerHTML = 'Cor indisponivel'
    }
})