const btn_add = document.querySelector('#btn_add')
const container_missoes = document.querySelector('#container_missoes')

let missoes = []

btn_add.addEventListener('click', () => {
    const select_prioridade = document.querySelector('#select_prioridade')
    const titulo_missao = document.querySelector('#titulo_missao').value
    const novaMissao = {
        titulo: titulo_missao,
        prioridade: select_prioridade.value,

        criarCard(){
            const div = document.createElement('div')
            div.setAttribute('class', 'card-missao')
            div.innerHTML = `Missão: ${novaMissao.titulo} <br/> Prioridade: ${novaMissao.prioridade}`
            div.classList.add(`prioridade-${this.prioridade}`)
            container_missoes.appendChild(div)

            const btn_concluir = document.createElement('button')
            btn_concluir.setAttribute('class', 'btn-concluir')
            btn_concluir.innerHTML = 'Concluir Tarefa'
            div.appendChild(btn_concluir)

            btn_concluir.addEventListener('click', () => {
                div.remove()
            })
        }
    }

    novaMissao.criarCard()
})