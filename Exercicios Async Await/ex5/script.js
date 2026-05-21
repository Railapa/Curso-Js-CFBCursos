const painel_frase = document.querySelector('#painel_frase')
const btn_frase = document.querySelector('#btn_frase')

const conselho = async () => {
    const url = `https://api.adviceslip.com/advice`
    
    painel_frase.innerHTML = 'Procurando conselho...'
    painel_frase.className = 'caixa-frase carregando'
    
    try{
        const urlBruta = await fetch(url)
        const resUrl = await urlBruta.json()
        painel_frase.innerHTML = resUrl.slip.advice
        painel_frase.className = 'caixa-frase'
    } catch (erro) {
        painel_frase.className = 'caixa-frase erro'
        painel_frase.innerHTML = erro
    }
}

btn_frase.addEventListener('click', conselho)