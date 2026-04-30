// 1. Desestruturação básica de Array
let [a, b, c, d] = ["Verde", "Amarelo", "Azul", "Branco"];
console.log(a, b, c, d); // Imprime: Verde Amarelo Azul Branco

// 2. Troca de valores (Swap) sem variável temporária
let x = 10, y = 20;
[x, y] = [y, x]; 
console.log(x, y); // Imprime: 20 10

// 3. Valores padrão para evitar undefined
let [v1, v2, v3=0] = [10, 20];
console.log(v1, v2, v3); // Imprime: 10 20 0

// 4. Capturando retorno de uma função
const f_cores = () => ["Red", "Green", "Blue"];
let [c1, c2, c3] = f_cores();
console.log(c1, c2, c3); // Imprime: Red Green Blue

let n1,n2,n3;
n1 = 'Amarelo';
({n1,n2,n3} = {n1:'Verde',n2:'Preto',n3:'Branco'});

console.log(n1);

let numeros = [10,20,30]
let [n4,n5,n6] = numeros
console.log(n5)