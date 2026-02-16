const produtos = 'Teclado Mecânico'
const preco = 150.00
const loja = 'TechStore'
const caixa = document.querySelector('#container-produtos')
const frase = `<div class='card'>
                 <h2>${produtos}</h2>
                 <p>Preço: ${preco}</p>
                 <p>Vendido por: ${loja}</p>
               </div>
`

caixa.innerHTML = frase