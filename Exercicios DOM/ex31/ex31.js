const mural = document.querySelector('#mural')
const novoP = document.createElement('p')
novoP.setAttribute('class', 'mensagem')
novoP.innerHTML = 'Nova mensagem gerada'
mural.append(novoP)