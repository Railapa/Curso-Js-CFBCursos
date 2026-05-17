// async function escreverPais(pais) {
//     const info = await fetch("https://restcountries.com/v3.1/name/" + pais)
//     console.log(await info.json())
// }

// escreverPais('portugal')



// Uma função simulando algo que demora (como ferver água ou buscar dados na internet)
const esquentarAgua = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Água fervida!");
        }, 5000); // Demora 5 segundos
    });
};

// O 'async' avisa ao JavaScript que usaremos o 'await' aqui dentro
const prepararCafe = async () => {
    console.log("1. Coloquei a água no fogo...");

    // O 'await' diz: "Pare tudo nesta linha até a água terminar de ferver"
    // Enquanto o robô espera aqui, o navegador não trava, ele pode rodar outras coisas no site
    const statusAgua = await esquentarAgua();
    console.log(`2. Status: ${statusAgua}`); // Essa linha só roda após os 5 segundos!

    console.log("3. Colocando o pó no filtro...");
    console.log("4. Passando o café na caneca...");
    console.log("5. Café pronto! ☕");
};

// Executando a função
prepararCafe();

// Esta linha está FORA da função async. Veja o que acontece:
console.log("O JavaScript continuou rodando e eu posso lavar a louça enquanto o café não fica pronto!");