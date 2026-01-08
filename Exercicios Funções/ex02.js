let senhaCorreta = 1234
let tentativaSenha = 123
function validarAcesso(){
    if (tentativaSenha === senhaCorreta){
        return 'Acesso Liberado'
    } else {
        return 'Acesso Negado'
    }
}

let mensagemAcesso = validarAcesso()
console.log(mensagemAcesso)