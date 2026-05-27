const btn_cotacao = document.querySelector('#btn_cotacao')
const status_cotacao = document.querySelector('#status_cotacao')

const buscarPreco = async () => {
    status_cotacao.innerHTML = 'Conectando ao Mercado...'
    status_cotacao.className = 'painel carregando'

    try {
        const url = 'https://economia.awesomeapi.com.br/last/BTC-BRL'
        const resBruta = await fetch(url)
        const resJson = await resBruta.json()

        status_cotacao.innerHTML = parseFloat(resJson.BTCBRL.bid).toFixed(2)
        status_cotacao.className = 'painel sucesso'
    } catch (erro) {
        status_cotacao.innerHTML = erro
        status_cotacao.className = 'painel erro'
    }
}

btn_cotacao.addEventListener('click', buscarPreco)