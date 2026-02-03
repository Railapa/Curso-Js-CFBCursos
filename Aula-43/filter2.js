const caixaCursos = document.querySelector('#caixaCursos')
const cursos = [...document.querySelectorAll('.curso')]
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySQL', 'Java']
const btnCursoSelecionado = document.getElementById('btnCursoSelecionado')

tecnologias.map((el, chave) => {
    const novoElemento = document.createElement('div')

    novoElemento.innerHTML = el
    novoElemento.setAttribute('id', 'c'+chave)
    novoElemento.setAttribute('class', 'curso c1') 

    const comandos = document.createElement('div')
    comandos.setAttribute('class', 'comandos')
 
    const rb = document.createElement('input')
    rb.setAttribute('type', 'radio')
    rb.setAttribute('name', 'rb_curso')

    comandos.appendChild(rb)
    novoElemento.appendChild(comandos)
    caixaCursos.appendChild(novoElemento)
    
})

btnCursoSelecionado.addEventListener('click', () => {
    const todosRadios = [...document.querySelectorAll('input[type=radio]')]
    const radioSelecionado = todosRadios.filter((el) => {
        return el.checked
    })
    const cursoSelecionado = radioSelecionado[0].parentNode.previousSibling.textContent
    alert(`Você selecionou o curso de ${cursoSelecionado}`)
    console.log(todosRadios)
    console.log(radioSelecionado)
    console.log(cursoSelecionado)
}) 

/*
1. Aplicando Filtro em Elementos do HTML
O professor utiliza o filter() não apenas em números ou strings, mas em uma coleção de elementos (divs) que representam cursos.

Ele captura todos os elementos com uma classe específica.

Usa o filter() para encontrar apenas o elemento que possui a classe "selecionado".

2. O Desafio da Seleção Única
O professor mostra como criar uma lógica para que apenas um curso seja selecionado por vez.

Ao clicar em um curso, o script remove a classe "selecionado" de todos os outros e a adiciona apenas ao clicado.

Isso prepara o terreno para que o método filter() saiba exatamente qual objeto processar.

3. Integração: Filter + DOM
O ponto alto da aula é o botão "Curso Selecionado".

Quando clicado, ele executa um filter() em todos os cursos.

A condição do filtro é: retornar apenas o elemento que contém a classe "selecionado".

Como o filter() sempre retorna um array, o professor acessa a posição [0] para obter o elemento exato e exibir seu texto em um alert().

4. Vantagens desta Técnica
Código Limpo: Em vez de usar loops for manuais com variáveis de controle, o filter() resolve a busca em poucas linhas.

Escalabilidade: Funciona da mesma forma se você tiver 5 ou 500 cursos na tela.

Dica do Professor Bruno: Lembre-se que o filter() retorna um novo array. Mesmo que apenas um item seja encontrado, ele virá dentro de "colchetes". Por isso usamos resultado[0] para manipular o elemento diretamente.
*/