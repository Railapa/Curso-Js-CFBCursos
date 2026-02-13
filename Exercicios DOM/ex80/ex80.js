const btn = document.querySelector('#btn-traduzir')
const input_termo = document.querySelector('#input-termo')
const msg = document.querySelector('#resultado-traducao')

let dicionario = new Map()

dicionario.set('array', 'vetor')
dicionario.set('function', 'função')
dicionario.set('curso', 'javascript')

btn.addEventListener('click', () => {
    
    if(dicionario.has(input_termo.value)){
        msg.innerHTML = dicionario.get(input_termo.value)
    } else {
        msg.innerHTML = 'Termo não encontrado'
    }

    input_termo.focus()
    input_termo.value = ''
})