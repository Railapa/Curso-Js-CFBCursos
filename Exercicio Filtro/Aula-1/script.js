// 1. Seleciona o campo de entrada e todos os itens da lista (cartões)
const filterElement = document.querySelector('header input');
const cards = document.querySelectorAll('.cards li');

function filterCards() {
  // 3. Verifica se o valor do input não está vazio
  if (filterElement.value !== '') {
    // 4. Percorre cada um dos cartões encontrados
    for (let card of cards) {
      // 5. Captura o título do cartão e converte para minúsculas
      let title = card.querySelector('h2').textContent.toLowerCase();
      // 6. Converte o que o usuário digitou para minúsculas
      let filterText = filterElement.value.toLowerCase();

      // 7. Se o título NÃO incluir o texto digitado, esconde o cartão
      if (!title.includes(filterText)) {
        card.style.display = "none";
      } else {
        // Caso contrário (se incluir), mantém o cartão visível
        card.style.display = "block";
      }
    }
  } else {
    // 8. Se o campo de busca estiver vazio, mostra todos os cartões novamente
    for (let card of cards) {
      card.style.display = "block";
    }
  }
}

// 2. Adiciona o evento que "escuta" cada letra digitada no input
filterElement.addEventListener('input', filterCards);