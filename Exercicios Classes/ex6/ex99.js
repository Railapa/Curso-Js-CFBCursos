class Tarefa{
    constructor(descricao){
        this.descricao = descricao
        this.concluida = false
    }

    finaliza(){
        this.concluida = true
    }

    exibir(){
        if(this.concluida == true){
            return `[V] Descrição`
        } else {
            return `[ ] Descrição`
        }
    }
}

const Tarefa1 = new Tarefa('Matematica')

console.log(Tarefa1.exibir())
Tarefa1.finaliza()
console.log(Tarefa1.exibir())