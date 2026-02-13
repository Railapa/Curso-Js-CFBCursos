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

/* 
1. O que é a Coleção Map?
A principal característica do Map é ser uma coleção do tipo Chave-Valor.

No Array, a referência é a posição (índice 0, 1, 2...).

No Map, tu defines uma chave personalizada (que pode ser uma string, número ou até um objeto) para guardar um valor.

2. Comandos Principais
Para trabalhar com um Map, utilizas os seguintes métodos:

set(chave, valor): Adiciona um novo par à coleção. Se a chave já existir, o valor é substituído.

get(chave): Recupera o valor associado àquela chave.

has(chave): Verifica se a chave existe na coleção (retorna true ou false).

delete(chave): Remove o item correspondente à chave.

size: É uma propriedade (não uma função) que indica quantos elementos existem no Map.
*/