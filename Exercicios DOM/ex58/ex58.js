const precos = [25.0, 10.0, 0.0, 50.0]
const btn = document.querySelector('#btn-validar')
const resultado = document.querySelector('#msg-validacao')

btn.addEventListener('click', () => {
    const preco_0 = precos.every((el, ind) => {
        return el > 0
    })

    if (preco_0) {
        resultado.innerHTML = `Todos os produtos estão com preços válidos!`
        resultado.classList.add('sucesso')
    } else {
        resultado.innerHTML = `Erro: Existe um produto com preço inválido ${preco_0}!`
        resultado.classList.add('erro')
    }
})