const btn_calcular = document.querySelector('#btn_calcular')
const resultado_logistica = document.querySelector('#resultado_logistica')

const carrinho = [
    { produto: "Smartphone", fragil: true },
    { produto: "Capinha", fragil: false },
    { produto: "Película de Vidro", fragil: false },
    { produto: "Carregador", fragil: false }
]

btn_calcular.addEventListener('click', () => {
    const fragil = carrinho.some((val) => {
        return val.fragil === true
    })

    if(fragil){
        resultado_logistica.innerHTML = '⚠️ Atenção: Carga Frágil! Adicional de R$ 20,00 no frete.'
        resultado_logistica.classList.add('aviso-fragil')
    } else {
        resultado_logistica.classList.remove('aviso-fragil')
        resultado_logistica.innerHTML = '✅ Frete padrão calculado com sucesso.'
        resultado_logistica.classList.add('envio-comum')
    }
})