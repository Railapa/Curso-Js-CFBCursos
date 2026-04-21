const grade = document.querySelector('#grade');
const listaResumo = document.querySelector('#listaResumo');
const valorTotal = document.querySelector('#valorTotal');
const cupomInput = document.querySelector('#cupom');
const btnFinalizar = document.querySelector('#btnFinalizar');

const destinos = [
    { nome: 'Salvador', preco: 200 },
    { nome: 'Rio de Janeiro', preco: 300 },
    { nome: 'Recife', preco: 170 },
    { nome: 'Natal', preco: 220 },
];

let carrinho = [];

// 1. Função que cuida APENAS do resumo (Direita)
const atualizarResumo = () => {
    listaResumo.innerHTML = ''; // Limpa para redesenhar
    let soma = 0;

    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `${item.nome} <span>R$ ${item.preco}</span>`;
        listaResumo.appendChild(li);
        soma += item.preco;
    });

    // Lógica do Cupom
    if (cupomInput.value === 'SALVADOR10') {
        soma = soma * 0.9; // 10% de desconto
    }

    valorTotal.textContent = soma.toFixed(2);

    // Habilitar/Desabilitar botão finalizar
    btnFinalizar.disabled = carrinho.length === 0;
};

// 2. Função que gera os cards (Esquerda)
const gerarCards = (lista) => {
    grade.innerHTML = '';

    lista.forEach(item => {
        const div = document.createElement('div');
        div.setAttribute('class', 'card');
        div.innerHTML = `<h3>${item.nome}</h3> <span>R$ ${item.preco}</span>`;

        div.addEventListener('click', () => {
            div.classList.toggle('selecionado');

            if (div.classList.contains('selecionado')) {
                // Adiciona o objeto inteiro ao carrinho
                carrinho.push(item);
            } else {
                // Remove do carrinho comparando o nome
                carrinho = carrinho.filter(c => c.nome !== item.nome);
            }

            atualizarResumo();
        });

        grade.appendChild(div);
    });
};

// Ouvinte para o cupom (atualiza o total enquanto digita)
cupomInput.addEventListener('input', atualizarResumo);

// Inicialização
gerarCards(destinos);