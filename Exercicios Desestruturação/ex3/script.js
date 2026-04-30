
const notas = [5,8,7.5]

const[a1,a2,a3] = notas
console.log(a1,a2,a3)

const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022
};

const {ano,modelo} = carro;
console.log(modelo)

let copoA = 'agua';
let copoB = 'suco';

[copoA, copoB] = [copoB, copoA];

console.log(copoA)