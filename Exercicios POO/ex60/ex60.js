const in_senha = document.querySelector('#in_senha')
const btn_entrar = document.querySelector('#btn_entrar')
const msg_login = document.querySelector('#msg_login')
const res_tentativas = document.querySelector('#res_tentativas')

class Login{
    constructor(){
        this.senha = 1234
        this.tentativas = 3
        this.bloqueado = false
    }

    tentativasLogin(logar){
        if(this.bloqueado === true){
            return 'CONTA BLOQUEADA'
        } 
        if(logar === this.senha){
            return 'ACESSO PERMITIDO'
        } else{
             this.tentativas--
            if(this.tentativas <= 0){
                return this.bloqueado = true
            }
            return 'SENHA INCORRETA'
        }
    }
}

const novoLogin = new Login()
btn_entrar.addEventListener('click', () => {

    msg_login.innerHTML = novoLogin.tentativasLogin(Number(in_senha.value))
    res_tentativas.innerHTML = novoLogin.tentativas;
})