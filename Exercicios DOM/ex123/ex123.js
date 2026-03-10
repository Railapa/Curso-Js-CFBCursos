const btn_analisar = document.querySelector('#btn_analisar')
const resultado_teste = document.querySelector('#resultado_teste')

const pecas = [
    { id: 1, defeitoVisual: false, resistenciaOk: true },
    { id: 2, defeitoVisual: true,  resistenciaOk: false }, // Peça ruim, será descartada pelo filter
    { id: 3, defeitoVisual: false, resistenciaOk: true },
    { id: 4, defeitoVisual: false, resistenciaOk: false } // Peça sem defeito visual, mas falhou na resistência!
]

btn_analisar.addEventListener('click', () => {
    const defeito = pecas.filter((val) => {
        return val.defeitoVisual === false
    })

    const resistencia = defeito.every((val) => {
        return val.resistenciaOk === true
    })

    if(defeito && resistencia){
        resultado_teste.innerHTML = '✅ Lote aprovado! Todas as peças boas passaram no teste de resistência.'
        resultado_teste.classList.add('lote-aprovado')
    } else {
        resultado_teste.classList.remove('lote-aprovado')
        resultado_teste.innerHTML = '❌ Lote reprovado! Alguma peça sem defeito visual falhou na resistência.'
        resultado_teste.classList.add('lote-reprovado')
    }
})