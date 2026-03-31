const sistemaSeguranca = {
    urlAcesso: "https://portal.unifacs.br/aluno",
    token: "TOKEN_12345_SECURE",
    mensagemPadrao: "Acesso Negado! "
}

console.log(sistemaSeguranca.urlAcesso.startsWith('https'))

console.log(sistemaSeguranca.urlAcesso.endsWith('/aluno'))

console.log(sistemaSeguranca.token.includes('SECURE'))

console.log(sistemaSeguranca.mensagemPadrao.repeat(3))

