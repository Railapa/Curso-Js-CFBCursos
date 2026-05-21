const cep_input = document.querySelector('#cep_input')
const btn_buscar = document.querySelector('#btn_buscar')
const resultado = document.querySelector('#resultado')

const buscarCep = async () => {
    const url = `https://viacep.com.br/ws/${cep_input.value}/json/`

    resultado.innerHTML = 'Buscando endereço...'
    resultado.className = 'painel carregando'

    try {
        const resBrutaUrl = await fetch(url)
        const resCep = await resBrutaUrl.json()

        if(resCep.erro){
            resultado.innerHTML = 'Este CEP não existe na base de dados.'
            resultado.className = 'painel erro'
            return 
        }

        resultado.className = 'painel sucesso'
        resultado.innerHTML = `Rua: ${resCep.logradouro} <br/>`
        resultado.innerHTML += `Bairro: ${resCep.bairro} <br/>`
        resultado.innerHTML += `Cidade: ${resCep.localidade}`
    } catch (erro){
        resultado.innerHTML = 'CEP não encontrado'
        resultado.className = 'painel erro'
    }
}

btn_buscar.addEventListener('click', buscarCep)