const cep = document.querySelector('#input-cep')
const btnBuscar = document.querySelector('#btn-buscar')
const res = document.querySelector('#resultado-cep')

const promessa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (cep.value == '40000000') {
                resolve({
                    logradouro: "Avenida Centenário",
                    bairro: "Chame-Chame",
                    cidade: "Salvador"
                })
            } else {
                reject('CEP não encontrado')
            }
        }, 2000)
    })
}

const buscarCep = async () => {
    res.classList.remove('encontrado')
    res.classList.remove('erro-cep')
    res.classList.add('pesquisando')
    res.innerHTML = 'Buscando...'

    try{
        const resCep = await promessa()
        res.innerHTML = 'Logradouro: ' + resCep.logradouro + '<br/>'
        res.innerHTML += 'Bairro: ' +  resCep.bairro + '<br/>'
        res.innerHTML += 'Cidade: ' +  resCep.cidade
        res.classList.add('encontrado')
    } catch (erro) {
        res.innerHTML = erro
        res.classList.add('erro-cep')
    }
}

btnBuscar.addEventListener('click', buscarCep)