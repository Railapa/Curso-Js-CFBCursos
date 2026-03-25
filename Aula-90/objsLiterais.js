
// 1. Definição de um Objeto Literal simples
const computador = {
    cpu: "i9",
    ram: "64GB",
    hd: "2TB",
    // Método (função interna do objeto)
    info: function() {
        console.log(`CPU: ${this.cpu} - RAM: ${this.ram} - HD: ${this.hd}`);
    }
};

// 2. Adicionar propriedades dinamicamente [00:15:20]
computador.placaVideo = "RTX"; // Notação de ponto
computador["monitor"] = "22 polegadas"; // Notação de array

// 3. Criar um Array de Objetos para listar vários computadores [00:06:21]
const computadores = [
    { cpu: "i9", ram: "64GB", hd: "2TB" },
    { cpu: "i7", ram: "32GB", hd: "2TB" },
    { cpu: "i5", ram: "16GB", hd: "1TB" }
];

// 4. Exibir no DOM (HTML) percorrendo o Array [00:09:41]
const objetosDiv = document.querySelector("#objetos");

computadores.forEach((c) => {
    const div = document.createElement("div");
    div.setAttribute("class", "computador"); // Adiciona uma classe CSS
    div.innerHTML = `CPU: ${c.cpu}<br>RAM: ${c.ram}<br>HD: ${c.hd}`;
    objetosDiv.appendChild(div);
});