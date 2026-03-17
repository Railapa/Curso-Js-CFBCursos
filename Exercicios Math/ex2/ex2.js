const res_1 = document.querySelector('#res_1')
const res_2 = document.querySelector('#res_2')
const res_3 = document.querySelector('#res_3')
const res_4 = document.querySelector('#res_4')

// DESAFIO 1: ARREDONDAMENTO
function testeRound() {
    const valor = 4.7;
    res_1.innerHTML = `
        Padrão (round): ${Math.round(valor)} <br>
        Para baixo (floor): ${Math.floor(valor)} <br>
        Para cima (ceil): ${Math.ceil(valor)}
    `;
}

// DESAFIO 2: POTÊNCIA E RAIZ
function testeRaiz() {
    res_2.innerHTML = `
        8² (pow): ${Math.pow(8, 2)} <br>
        √64 (sqrt): ${Math.sqrt(64)}
    `;
}

// DESAFIO 3: MÁXIMO E MÍNIMO
function testeMinMax() {
    // Math.max retorna o maior da lista
    res_3.innerHTML = `Maior: ${Math.max(5, 12, 8, 20, 2)}`;
}

// DESAFIO 4: CONSTANTES
function testeConst() {
    // Usamos += ou aspas duplas para mostrar os dois ao mesmo tempo
    res_4.innerHTML = `
        PI: ${Math.PI} <br>
        Euler (E): ${Math.E}
    `;
}