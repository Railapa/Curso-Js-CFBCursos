const btn = document.querySelector('#btn-promo')
const produto = [...document.querySelectorAll('.produto')]

btn.addEventListener('click', () => {
    let baratos = produto.filter((val) => {
        let preco = Number(val.getAttribute('data-preco'))
        return preco < 50
    })

    baratos.map((el) => {
        el.classList.add('oferta')
    })
})
