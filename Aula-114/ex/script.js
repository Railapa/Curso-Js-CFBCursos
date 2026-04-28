// Dados iniciais
const destinoFavorito = {
    cidade: "Salvador",
    pontoTuristico: "Pelourinho",
    preco: 150.00
}

const guiasDisponiveis = ["Bruno", "Alice", "Carlos"];

({cidade, preco} = {cidade: 'Rio de Janeiro', preco: 200});

console.log(destinoFavorito.cidade)

let turnoA = 'Manhã';
let turnoB = 'Noite';

[turnoA, turnoB] = [turnoB, turnoA];

console.log(turnoA)