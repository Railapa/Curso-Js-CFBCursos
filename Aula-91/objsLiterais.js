const computador = {
    cpu: "",
    ram: "",
    hd: "",
    info: function() {
        console.log(`CPU: ${this.cpu} - RAM: ${this.ram} - HD: ${this.hd}`);
    }
};

// 1. Clonando e modificando
const c1 = Object.assign({}, computador);
c1.cpu = "i7";

// 2. Mesclando objetos (Merge) [00:03:22]
const o1 = { obj1: "Valor 1" };
const o2 = { obj2: "Valor 2" };
const o3 = Object.assign(o1, o2); // o3 agora tem as duas propriedades

// 3. Deletando uma propriedade [00:04:50]
delete computador.hd; 
// Se chamares computador.info(), o HD aparecerá como 'undefined'

// 4. Criando um objeto com base em outro (Prototipagem) [00:07:17]
const c2 = Object.create(computador);
c2.cpu = "i9";
c2.ram = "32GB";
c2.hd = "2TB";
c2.info(); // Exibe os dados do c2