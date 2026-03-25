const computador = {
    cpu: "",
    ram: "",
    hd: "",

    info: function() {
        console.log(`CPU: ${this.cpu} - RAM: ${this.ram} - HD: ${this.hd}`);
    }
};

computador.placaVideo = "RTX"; 
computador["monitor"] = "22 polegadas"; 

 const c1 = Object.assign({}, computador)

 const o1 = {obj1: '1'}
 const o2 = {obj2: '2'}
 const o3 = {obj3: '3'}
 const o4 = Object.assign(o1, o2, o3)

 delete(computador.hd)

 const c2 = Object.create(computador)
 c2.cpu = 'i8'
 c2.ram = '32g'
 c2.hd = '2tb'

const computadores = [
    { cpu: "i9", ram: "64GB", hd: "2TB" },
    { cpu: "i7", ram: "32GB", hd: "2TB" },
    { cpu: "i5", ram: "16GB", hd: "1TB" }
];

const objetosDiv = document.querySelector("#objetos");

computadores.forEach((c) => {
    const div = document.createElement("div");
    div.setAttribute("class", "computador"); 
    div.innerHTML = `CPU: ${c.cpu}<br>RAM: ${c.ram}<br>HD: ${c.hd}`;
    objetosDiv.appendChild(div);
});