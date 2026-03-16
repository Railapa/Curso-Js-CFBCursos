const res_every = document.querySelector('#res_every')
const btn_every = document.querySelector('#btn_every')

const convidados = [
    { nome: 'Hugo', idade: 20 },
    { nome: 'Zé', idade: 17 },
    { nome: 'Maria', idade: 25 }
]

btn_every.addEventListener('click', () => {
    res_every.innerHTML = ''
    const maiorDeIdade = convidados.every((val) => {
        return val.idade >= 18
    })

    if(maiorDeIdade){
        res_every.innerHTML = '✅ Entrada Liberada para o grupo!'
        res_every.style.color = "green"
    } else {
        res_every.innerHTML = '❌ Entrada Proibida: Alguém é menor de idade!'
        res_every.style.color = "red"
    }
})