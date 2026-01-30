const caixa1 = document.querySelector('#caixa1')
const cursos = document.querySelectorAll('.curso')
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySQL', 'Java']

tecnologias.map((el, chave) => {
    const novoElemento = document.createElement('div')
    caixa1.appendChild(novoElemento)
    novoElemento.innerHTML = el
    novoElemento.setAttribute('id', 'c'+chave)
    novoElemento.setAttribute('class', 'curso c1')
})

/* 
1. Criar e Anexar Elementos
O processo básico de criação envolve dois métodos principais:

document.createElement("tag"): Este método cria um novo elemento (como uma div, p, ou button) na memória do navegador. Note que ele ainda não aparece na tela após este comando.

appendChild(novoElemento): Este método é usado para "adotar" o elemento criado, anexando-o como filho de um elemento pai que já existe na página (ex: um container ou o próprio body).

2. Configurar o Novo Elemento
Após criar o elemento, você pode definir as suas propriedades antes de mostrá-lo ao utilizador:

innerHTML: Define o texto ou conteúdo que estará dentro da tag.

setAttribute("atributo", "valor"): É a forma recomendada pelo professor para definir IDs e Classes. Exemplo: novoElemento.setAttribute("id", "c7") ou novoElemento.setAttribute("class", "curso").

3. Automação com Arrays e map
O professor demonstra como usar o que aprendeu para criar uma lista inteira de cursos de forma automática:

Ele cria um Array com os nomes dos cursos.

Utiliza o método .map() para percorrer esse array.

Para cada item do array, o código cria uma nova div, define um ID único (usando o índice da chave do map) e anexa no container principal.

4. Dica sobre IDs Únicos
O professor enfatiza que cada elemento deve ter um ID único. Para resolver isso dinamicamente, ele utiliza a chave (índice) fornecida pelo método map para compor o ID (ex: "C" + chave), garantindo que não existam conflitos de identificação na página.
*/