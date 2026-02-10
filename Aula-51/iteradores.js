const valores = [10,8,9,2]
const texto = 'YouTube'

const it_texto = texto[Symbol.iterator]()
const it_valores = valores[Symbol.iterator]()

console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())

console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())