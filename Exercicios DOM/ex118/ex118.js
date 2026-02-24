class Validador{
    static validarSenha = function(senha){
        this.senha = senha
        if(senha.length > 8){
            return true
        } else {
            return false
        }
    }
}

console.log(Validador.validarSenha('Senha'))
console.log(Validador.validarSenha('Senha Segura'))
