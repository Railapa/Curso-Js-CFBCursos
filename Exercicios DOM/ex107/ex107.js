const configApp = {
    tema: 'Claro',
    idioma: 'Português',
    volume: 50,

    alterarTema: function(){
        if(this.tema == 'Claro'){
            this.tema = 'Escuro'
        } else if(this.tema == 'Escuro'){
            this.tema = 'Claro'
        }
    },

    setVolume: function(novoValor){
        if(this.volume >= 0 && this.volume <= 100){
            this.volume += novoValor
        }
    },

    exibirResumo: function(){
        console.log(`Configurações atuais: Tema: ${this.tema}, Idioma: ${this.idioma}, Volume: ${this.volume}`)
    }
}

const config1 = configApp
const config2 = configApp
const config3 = configApp
config1.alterarTema()
config2.setVolume(15)
config3.exibirResumo()