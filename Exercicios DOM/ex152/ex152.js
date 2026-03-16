const res_some = document.querySelector('#res_some')
const btn_some = document.querySelector('#btn_some')

const servidores = [
    { nome: 'Servidor Américas', status: 'online' },
    { nome: 'Servidor Europa', status: 'online' },
    { nome: 'Servidor Ásia', status: 'erro' },
    { nome: 'Servidor Oceania', status: 'online' }
]

btn_some.addEventListener('click', () => {
    res_some.innerHTML = ''
    const servidoresOk = servidores.some((val) => {
        return val.status === 'erro'
    })

    if(servidoresOk){
        res_some.innerHTML = `⚠️ Manutenção Necessária: Há falhas no sistema!`
        res_some.style.color = 'red'
    } else {
        res_some.innerHTML = `✅ Todos os sistemas operacionais.`
        res_some.style.color = 'green'
    }
})