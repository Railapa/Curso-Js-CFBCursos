const valores = [50, 100, 20]
const btn = document.querySelector('#btn-relatorio')
const resultado = document.querySelector('#txt-vendas')

btn.addEventListener('click', () => {
    const valoresSoma = valores.reduce((ant,atu) => {
        return atu + ant
    })

    resultado.innerHTML = `O total de vendas hoje foi de R$ ${valoresSoma} dividido em ${valores.length}`
})