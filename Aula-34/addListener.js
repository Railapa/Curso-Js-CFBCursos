/* 
1. O que são Eventos?
Definição: Acontecimentos disparados pelo usuário ou pelo navegador (ex: click, mouseover, keydown, load).

Interceptação: Podemos "escutar" esses eventos para executar um código específico quando eles ocorrerem.

2. Formas de Adicionar Eventos
O professor Bruno explica que existem duas formas principais:

Direto no HTML (Atributos on): Usando atributos como onclick diretamente nas tags. Embora funcione, o professor recomenda evitar essa prática para manter o HTML limpo e separado da lógica.

Via JavaScript (addEventListener): Esta é a forma recomendada e mais profissional. Ela permite adicionar "escutadores" a elementos específicos sem sujar o código HTML.

3. O Método addEventListener
É a ferramenta principal da aula. Sua sintaxe básica é: elemento.addEventListener("evento", funcao)

Evento: O nome da ação (ex: "click", sem o prefixo "on").

Função: O que será executado. Pode ser uma função já existente ou uma Arrow Function criada na hora.

4. O Objeto de Evento (evt) e o target
Um conceito avançado e muito útil apresentado é que, ao disparar um evento, o JavaScript envia automaticamente um objeto (geralmente chamado de evt ou e) para a função.

evt.target: Esta propriedade permite saber exatamente quem disparou o evento. Isso é fundamental quando você tem muitos elementos iguais e quer saber em qual deles o usuário clicou.

5. Aplicação em Massa (Integração com Map)
A aula encerra mostrando como unir o que aprendemos sobre querySelectorAll e map para adicionar eventos a vários elementos de uma vez:

Captura-se todos os elementos com uma classe (ex: .curso).

Converte-se para um Array (usando Spread ...).

Usa-se o .map() para percorrer cada elemento e adicionar o addEventListener("click", ...) a todos eles.

Dica Extra: Por que addEventListener é melhor?
Diferente do atributo onclick do HTML (que só permite uma ação por clique), o addEventListener permite que você adicione múltiplos escutadores ao mesmo elemento sem que um apague o outro. Você pode ter uma função para mudar a cor e outra para exibir um alerta, ambas disparadas pelo mesmo clique.

Entendendo o evt.target de vez
Imagine que você é um segurança em uma festa com 100 convidados. Todos eles têm um botão no peito. Se alguém apertar o botão, você precisa entregar um copo de água especificamente para quem apertou.

O addEventListener é o seu ouvido: ele fica escutando o "clique".

O evt (ou objeto de evento) é o relatório que o JavaScript cria no momento do clique.

O evt.target é o "dedo-duro": ele aponta exatamente para o elemento HTML que foi clicado
*/

const c1 = document.querySelector('#c1')
const cursos = [...document.querySelectorAll('.curso')]

c1.addEventListener('click', () => {
    c1.innerHTML = 'Java'
})

for (el of cursos) {
    el.addEventListener('click', (evt) => {
        const el = evt.target
        el.classList.add('destaque')
    })
}