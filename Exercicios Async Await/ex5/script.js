const painel_frase = document.querySelector('#painel_frase')
const btn_frase = document.querySelector('#btn_frase')

const conselho = async () => {
    const url = `https://api.adviceslip.com/advice`
    painel_frase.className = 'painel caixa-frase'
    
    try{
        const resBruta = await fetch(url)
        const res = await resBruta.json()
        painel_frase.innerHTML = res.slip.advice
    } catch(erro) {
        painel_frase.innerHTML = 'Sistema indisponivel'
    }
}

btn_frase.addEventListener('click', conselho)