const configuracao = {
    url: "https://plataforma.tzopenbanking.com.br",
    senhaDica: "Sua senha começa com a letra 'A' e termina com '!' "
}

console.log(configuracao.url.indexOf('tzopenbanking'))

console.log(configuracao.url.lastIndexOf('.'))

console.log(configuracao.senhaDica.charAt(49))

console.log(configuracao.senhaDica.charCodeAt(49))

let msg = 'Verificação concluída para a URL: '

console.log(msg.concat(configuracao.url))