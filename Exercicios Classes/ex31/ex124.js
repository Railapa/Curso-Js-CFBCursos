class Sistema{
    static online = false

    tentarEntrar = function(){
        if(Sistema.online == true){
            return console.log('Acesso Liberado')
        } else if (Sistema.online == false){
            return console.log('Sistema em manutenção')
        }
    }
}

const usuario = new Sistema
usuario.tentarEntrar()
Sistema.online = true
usuario.tentarEntrar()