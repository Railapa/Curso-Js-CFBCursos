const tagPrivada = Symbol.for('id_seguro')
const tagGlobal = Symbol.for('auth_key')

const cofre = {
    usuario: 'Admin',
    [tagPrivada]: 9876,
    [tagGlobal]: 'Acesso Total'
}

for(el in cofre){
    console.log(el)
}

console.log(cofre[tagPrivada])
console.log(Symbol.keyFor(tagPrivada))
console.log(Symbol.keyFor(tagGlobal))
