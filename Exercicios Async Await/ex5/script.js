const painel_frase = document.querySelector('#painel_frase')
const btn_frase = document.querySelector('#btn_frase')

const conselho = async () => {
    const url = `https://api.adviceslip.com/advice`

    painel_frase.className = 'caixa-frase carregando'
    painel_frase.innerHTML = 'Procurando conselho...'

    try {
        const resBruta = await fetch(url)
        const resObj = await resBruta.json()
        painel_frase.innerHTML = resObj.slip.advice

    } catch (erro) {
        painel_frase.className = 'caixa-frase erro'
        painel_frase.innerHTML = 'Erro no sistema'
    }
}

btn_frase.addEventListener('click', conselho)