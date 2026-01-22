const login = (usuario, senha) => {
    this.usuario = 'admin'
    this.senha = '1234'
    if (usuario == 'admin' && senha == '1234'){
        return 'Login Autorizado'
    } else {
        return 'Login Invalido'
    }
}

console.log(login('admin', '1234'))
console.log(login('user', '1234'))
console.log(login('admin', '123'))