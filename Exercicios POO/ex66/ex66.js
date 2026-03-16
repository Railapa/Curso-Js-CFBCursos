const res_nome_tarefa = document.querySelector('#res_nome_tarefa')
const res_prioridade = document.querySelector('#res_prioridade')
const in_tarefa = document.querySelector('#in_tarefa')
const btn_baixa = document.querySelector('#btn_baixa')
const btn_media = document.querySelector('#btn_media')
const btn_alta = document.querySelector('#btn_alta')
const painel_tarefa = document.querySelector('#painel_tarefa')

class GestorTarefa{
    constructor(){

    }

    receberTarefa(nomeTarefa){
         this.nomeTarefa = nomeTarefa
         return res_nome_tarefa.innerHTML = this.nomeTarefa
    }
}

const postarTarefa = new GestorTarefa()

btn_baixa.addEventListener('click', () => {
    postarTarefa.receberTarefa(in_tarefa.value)
    res_prioridade.innerHTML = 'Baixa'
    painel_tarefa.style.backgroundColor = '#2ecc71'
})

btn_media.addEventListener('click', () => {
    postarTarefa.receberTarefa(in_tarefa.value)
    res_prioridade.innerHTML = 'Media'
    painel_tarefa.style.backgroundColor = '#f1c40f'
})

btn_alta.addEventListener('click', () => {
    postarTarefa.receberTarefa(in_tarefa.value)
    res_prioridade.innerHTML = 'Alta'
    painel_tarefa.style.backgroundColor = '#e74c3c'
})