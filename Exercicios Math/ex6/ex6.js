const in_cateto_a = document.querySelector('#in_cateto_a')
const in_cateto_b = document.querySelector('#in_cateto_b')
const res_pitagoras = document.querySelector('#res_pitagoras')
const btn_calcular = document.querySelector('#btn_calcular')

btn_calcular.addEventListener('click', () => {
    const cateto1 = Number(in_cateto_a.value)
    const cateto2 = Number(in_cateto_b.value)

    const powCateto1 = Math.pow(cateto1, 2)
    const powCateto2 = Math.pow(cateto2, 2)

    const somaCatetos = powCateto1 + powCateto2

    const raizCatetos = Math.sqrt(somaCatetos)

    res_pitagoras.innerHTML = raizCatetos.toFixed(2)
})