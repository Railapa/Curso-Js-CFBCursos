const projetos = [
    { nome: "Site Financeiro", tecnologia: "JavaScript" },
    { nome: "Landing Page Starbucks", tecnologia: "HTML" },
    { nome: "Sistema TLP", tecnologia: "CSS" },
    { nome: "App de Clima", tecnologia: "JavaScript" }
];

const campoBusca = document.querySelector('#campoBusca');
const lista = document.querySelector('#listaProjetos');

// 2. Crie uma função para mostrar os projetos na tela
function mostrarProjetos(listaFiltrada) {
    lista.innerHTML = ""; // Limpa a lista antes de mostrar
    listaFiltrada.forEach(p => {
        const item = document.createElement('li');
        item.textContent = `${p.nome} - (${p.tecnologia})`;
        lista.appendChild(item);
    });
}

// Mostrar todos logo que a página carrega
mostrarProjetos(projetos);

// 3. Adicione o evento de 'input' no campoBusca
campoBusca.addEventListener('input', () => {
    const termo = campoBusca.value.toLowerCase(); // O que você digitou
    
    // A mágica acontece aqui:
    const projetosFiltrados = projetos.filter(p => {
        // Queremos saber se a tecnologia do projeto inclui o que foi digitado
        return p.tecnologia.toLowerCase().includes(termo);
    });

    // Agora chamamos a função para desenhar a lista nova na tela
    mostrarProjetos(projetosFiltrados);
});