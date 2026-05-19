const in_vel = document.querySelector('#input-velocidade')
const btn = document.querySelector('#btn-testar')
const statusConexao = document.querySelector('#status-conexao')

const promessa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (in_vel.value > 0) {
                resolve('Conexão estavel!')
            } else {
                reject('Falha na conexão')
            }
        }, 2000)
    })
}

const conexao = async () => {
    statusConexao.classList.remove('estavel')
    statusConexao.classList.remove('queda')
    statusConexao.classList.add('medindo')
    statusConexao.innerHTML = 'Verificando conexao...'

    try{
        const res = await promessa()
        statusConexao.innerHTML = res
        statusConexao.classList.add('estavel')
    } catch (erro) {
        statusConexao.innerHTML = erro
        statusConexao.classList.add('queda')
    }
}

btn.addEventListener('click', conexao)