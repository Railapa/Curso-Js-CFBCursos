let carro = {
    modelo: 'fusca'
}

const chaveSecreta = Symbol('id')

carro[chaveSecreta] = 12345

for(let p in carro){
    console.log(p)
}