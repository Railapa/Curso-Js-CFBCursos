
const notas = [5,8,6]
const [n1,n2,n3] = notas
console.log(n1,n2,n3)

const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022
};

const {ano,modelo} = carro;
console.log(modelo)

let copoA = 'agua';
let copoB = 'suco';

[copoA, copoB] = [copoB, copoA]

console.log(copoA, copoB)