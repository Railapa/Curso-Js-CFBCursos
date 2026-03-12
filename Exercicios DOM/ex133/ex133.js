const btn_some = document.querySelector('#btn_some')
const msg_financeiro = document.querySelector('#msg_financeiro')

const alunos = [
    { nome: "Ricardo", pago: true },
    { nome: "Juliana", pago: false },
    { nome: "Marcio", pago: true }
]

btn_some.addEventListener('click', () => {
    const mensalidadeOk = alunos.some((val) => {
        return val.pago === false
    })

    if(!mensalidadeOk){
        msg_financeiro.classList.add('sucesso')
        msg_financeiro.innerHTML = `✅ Tudo em dia! Nenhum aluno pendente.`
    } else {
        msg_financeiro.classList.remove('sucesso')
        msg_financeiro.innerHTML = `⚠️ Atenção: Existem mensalidades pendentes no sistema!`
        msg_financeiro.classList.add('alerta')
    }
})