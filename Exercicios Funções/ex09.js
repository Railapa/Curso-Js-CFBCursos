function* contarPassos(){
    yield 'Passo 1'
    yield 'Passo 2'
    yield 'Passo 3'
}

const iterador = contarPassos()
for(let c = 1; c <= 3; c++){
    //console.log(iterador.next().value)
}

function* gerarId(){
    let id = 0
    while(true){ // Loop infinito
        yield id++
    }
}

const c = gerarId()
for(let i = 0; i <= 10; i++){
    //console.log(c.next().value)
}

function* conversador(){
    const nome = yield 'Qual o seu nome?'
    yield `Olá, ${nome}!`
}

const conv = conversador()
console.log(conv.next().value)
console.log(conv.next('Raí').value)