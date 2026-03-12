const btn_every = document.querySelector('#btn_every')
const status_seguranca = document.querySelector('#status_seguranca')

const equipe = [
    { nome: "João", epi: false },
    { nome: "Maria", epi: true },
    { nome: "Pedro", epi: true },
    { nome: "Ana", epi: true }
]

btn_every.addEventListener('click', () => {
    const capacetesOk = equipe.every((val) => {
        return val.epi === true
    })

    if(capacetesOk){
        status_seguranca.classList.add('liberado')
        status_seguranca.innerHTML = `✅ Entrada Liberada! Todos os operários estão seguros.`
    } else {
        status_seguranca.classList.remove('liberado')
        status_seguranca.innerHTML = `🛑 Entrada Bloqueada! Há integrantes sem equipamento.`
        status_seguranca.classList.add('bloqueado')
    }
})