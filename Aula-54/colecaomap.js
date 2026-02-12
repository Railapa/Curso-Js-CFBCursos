const caixa = document.querySelector('#caixa') 

let mapa = new Map()

mapa.set('curso', 'Javascript')
mapa.set(10, 'CFB Cursos')
mapa.set(1, 100)
mapa.set('canal', 100)
mapa.set('jogador', 'Paul Pogba')

mapa.delete(1)

let pes = 'jogador'
if(mapa.has(pes)){
    caixa.innerHTML = 'A chave existe na coleção com o valor ' + mapa.get(pes)
    caixa.innerHTML += '<br/> O tamanho da coleção é ' + mapa.size
} else {
    caixa.innerHTML = 'A chave não está na coleção'
}

