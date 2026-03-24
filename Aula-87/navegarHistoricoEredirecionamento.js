const url = document.querySelector('#url')
const btn_url = document.querySelector('#btn_url')

btn_url.addEventListener('click', () => {
    // IMPORTANTE: Se o botão estiver dentro de um <form>,
    // precisamos evitar que o formulario recarregue a pagina antes da hora.
    // evt.preventDefault() - Impede o corpotamento padarão de envio

    /* --- REDIRECIONAMENTO (window.location) --- */

    // Opção 1: Redirecionar mantendo o historico (Assign)
    window.location.assign(url.value)

    // Opção 2: Redirecionar APAGANDO a página atual do historico (Replace)
    window.location.replace(url.value)

    // Opção 3: Atrivuição direta (o jeito mais comum)
    window.location.href = url.value // Pega o valor digitado e navega para ele

    //Opção 4: Recarregar a página
    window.location.reload()
})

 /* --- NAVEGAÇÃO NO HISTORICO (window.history) --- */

 //Exemplo de como voltar uma pagina via codigo:
 window.history.back()

 //Exemplo de como avançar um pagina:
 window.history.forward()

 // Exemplo de como pular 2 paginas para trá de uma vez
 window.history.go(-2) //Ou se quiser avançar, basta colocar numero positivo

 // Mostra no console quantas paginas existem no historico da aba atual:
 window.history.length
