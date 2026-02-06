const input_cor = document.querySelector('#input-cor')
const btn = document.querySelector('#btn-buscar')
const caixaCor = document.querySelector('#caixa-cor')
const mensagem = document.querySelector('#mensagem')
const coresDisponiveis = ["Azul", "Vermelho", "Verde", "Amarelo", "Preto"]

btn.addEventListener('click', () => {
    const corSelecionada = coresDisponiveis.find((el) => {
        return el.toUpperCase() == input_cor.value.toUpperCase()
    })
    if (corSelecionada != undefined) {
        mensagem.innerHTML = `Cor selecionada: ${corSelecionada}`
    } else {
        alert('Cor indisponivel')
    }

    if (corSelecionada == 'Azul') {
        caixaCor.style.backgroundColor = 'blue'
    } else if (corSelecionada == 'Vermelho') {
        caixaCor.style.backgroundColor = 'red'
    } else if (corSelecionada == 'Verde') {
        caixaCor.style.backgroundColor = 'green'
    } else if (corSelecionada == 'Amarelo') {
        caixaCor.style.backgroundColor = 'yellow'
    } else if (corSelecionada == 'Preto') {
        caixaCor.style.backgroundColor = 'black'
    }

    input_cor.value = ''
    input_cor.focus()

})