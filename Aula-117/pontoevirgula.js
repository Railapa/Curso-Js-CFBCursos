// CASO 1: Desestruturação de Array
let n1 = 10; // Tente remover este ";"
[a, b] = [20, 30]; 
console.log(n1, a, b);

// CASO 2: Funções anônimas imediatas
let n2 = "Texto"; // Tente remover este ";"
(function() {
    console.log("Executou a função");
})();

// CASO 3: Instruções na mesma linha
// Aqui o ponto e vírgula é SEMPRE obrigatório
let i = 0; i++; console.log(i);