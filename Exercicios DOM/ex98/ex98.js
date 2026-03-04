const status_visor = document.querySelector('#status_visor')
const btn_scan = document.querySelector('#btn_scan')
const id_usuario = document.querySelector('#id_usuario')

const verificarID = (id) => {
    return new Promise((ok, rej) => {
        setTimeout(() => {
            if(id%2==0){
                ok('IDENTIDADE CONFIRMADA. ACESSO LIBERADO!')
            } else {
                rej('ID NÃO RECONHECIDO. ACESSO NEGADO.')
            }
        }, 1500);
    })
}

btn_scan.addEventListener('click', () => {
    btn_scan.disabled = true
    status_visor.innerHTML = 'AGUARDANDO RESULTADO...'
    verificarID(id_usuario.value)

    .then((msgSucesso) => {
        status_visor.innerHTML = msgSucesso
        status_visor.classList.remove('acesso-negado')
        status_visor.classList.add('acesso-permitido')
    })

    .catch((msgErro) => {
        status_visor.innerHTML = msgErro
        status_visor.classList.add('acesso-negado')
        status_visor.classList.remove('acesso-permitido')
    })

    .finally(() => {
        btn_scan.disabled = false
    })
})