let contador = 1
const btnAdicionar = document.querySelector('#btn-adicionar')
const painel = document.querySelector('#painel-botoes')

btnAdicionar.addEventListener('click', () => {
    const novoBtn = document.createElement('button')
    novoBtn.setAttribute('class', 'btn-dinamico') 
    novoBtn.innerHTML = 'Botão ' + contador
  
    novoBtn.addEventListener('click', () => {
        alert('Você clicou no botão ' + (novoBtn.innerHTML))
    })

    painel.appendChild(novoBtn)
    contador++ 
})