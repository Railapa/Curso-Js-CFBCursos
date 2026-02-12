const corSelecionada = document.querySelector('#cor-selecionada')
const btn = document.querySelector('#btn-revelar')

let paleta = [
    "Cores de Verão",           
    ["Azul Marinho", "Verde Musgo"], 
    ["Amarelo", "Rosa Choque"]   
]

paleta.unshift('Sessão vip')
paleta.push(['Preto', 'Branco'])
console.log(paleta)

btn.addEventListener('click', () => {
    corSelecionada.innerHTML = paleta[2][1]
})