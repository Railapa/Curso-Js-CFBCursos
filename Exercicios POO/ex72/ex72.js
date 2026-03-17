const log = document.querySelector('#log')
const btn_upgrade = document.querySelector('#btn_upgrade')

class Personagem{
    constructor(nome){
        this.nome = nome
        this.nivel = 1
    }
}


btn_upgrade.addEventListener('click', () => {
    const p1 = new Personagem('Guerreiro')
    
    Personagem.prototype.atacar = function(){
        return `${p1.nome} atacou com força total`
    }

    log.innerHTML = p1.atacar()
})