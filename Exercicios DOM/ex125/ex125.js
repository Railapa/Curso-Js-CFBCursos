const btn_verificar = document.querySelector('#btn_verificar')
const msg_viagem = document.querySelector('#msg_viagem')

const turma = [
    { nome: "Ana", media: 8, presenca: 90 },
    { nome: "Beto", media: 7, presenca: 80 },
    { nome: "Caio", media: 6, presenca: 75 }
]

btn_verificar.addEventListener('click', () => {
    const verificacao = turma.every((val) => {
        return val.media >= 6 && val.presenca >= 75
    })

    if(verificacao){
        msg_viagem.classList.add('liberado')
        msg_viagem.innerHTML = '🎉 Partiu viagem! Turma 100% aprovada.'
    } else {
        msg_viagem.classList.remove('liberado')
        msg_viagem.innerHTML = '❌ Viagem cancelada. Nem todos atingiram os requisitos.'
        msg_viagem.classList.add('negado')
    }
})