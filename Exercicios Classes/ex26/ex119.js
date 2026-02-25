class Configuracao{
    static idioma = 'Inglês'

    saudar = function(){
        if(Configuracao.idioma == 'Português'){
            console.log('Olá')
        } else if(Configuracao.idioma == 'Inglês'){
            console.log('Hello')
        }
    }
}

const user1 = new Configuracao;
user1.saudar()

const user2 = new Configuracao;
Configuracao.idioma = 'Português'
user2.saudar()