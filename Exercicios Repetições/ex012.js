let estoque = ["teclado", "mouse", "monitor", "headset", "gabinete"]
for(n of estoque){
    console.log(`Verificando ${n}`)
    if (n == "monitor"){
        console.log(`Item encontrado! Parando a busca`)
        break
    }
}

let senhaCorreta = '1234'
let senhaTentativa = '1234'
while(senhaTentativa != senhaCorreta){
    console.log('Senha incorreta')
}

