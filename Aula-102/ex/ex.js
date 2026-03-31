const entradaSGBD = {
    registro: "ID:1052-NOME:bruno_pinho_campos-STATUS:ativo",
    urlIncorreta: "https://meusite.com/perfil/usuario-config",
    compararSenha: "Senha123"
};

const senha = 'Senha123'
console.log(senha.localeCompare(entradaSGBD.compararSenha))

console.log(entradaSGBD.registro.replace('_', ' '))

console.log(entradaSGBD.urlIncorreta.slice(20, 26))

console.log(entradaSGBD.registro.split('-'))

console.log(entradaSGBD.registro.search('STATUS'))