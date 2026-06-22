const btn_cotacao = document.querySelector('#btn_cotacao')
const status_cotacao = document.querySelector('#status_cotacao')

const btc = async () => {
    status_cotacao.innerHTML = 'verificando...'

    try {
        const url = 'https://economia.awesomeapi.com.br/last/BTC-BRL'
        const resBruta = await fetch(url)
        const resJson = await resBruta.json()
        status_cotacao.innerHTML = parseFloat(resJson.BTCBRL.bid).toFixed(2)

    } catch(err){
        status_cotacao.innerHTML = err
    }
}

btn_cotacao.addEventListener('click', btc)