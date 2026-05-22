const cep_input = document.querySelector('#cep_input')
const btn_buscar = document.querySelector('#btn_buscar')
const resultado = document.querySelector('#resultado')

const buscarCep = async () => {
    const url = `https://viacep.com.br/ws/${cep_input.value}/json/`

    resultado.innerHTML = 'Buscando CEP...'
    resultado.className = 'painel carregando'

    try {
        const resBruta = await fetch(url)
        const resObj = await resBruta.json()

        if (resObj.erro) {
            resultado.innerHTML = 'Este CEP não existe na base de dados.'
            resultado.className = 'painel erro'
            return 
        }

        resultado.innerHTML = `<strong>Rua:</strong> ${resObj.logradouro} <br/>
            <strong>Bairro:</strong> ${resObj.bairro} <br/>
            <strong>Cidade:</strong> ${resObj.localidade}`

        resultado.className = 'painel sucesso'
    } catch(erro) {
        resultado.innerHTML = 'CEP não encontrado.'
        resultado.className = 'painel erro'
    }
}

btn_buscar.addEventListener('click', buscarCep)