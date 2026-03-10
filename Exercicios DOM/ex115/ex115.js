const btn_analisar = document.querySelector('#btn_analisar')
const aviso_alergia = document.querySelector('#aviso_alergia')

const ingredientes = [
    { nome: "Macarrão", temGluten: true },
    { nome: "Manjericão", temGluten: false },
    { nome: "Azeite", temGluten: false },
    { nome: "Queijo", temGluten: false }
]

btn_analisar.addEventListener('click', () => {
    const gluten = ingredientes.some((val) => {
        return val.temGluten === true
    })

    if(gluten){
        aviso_alergia.innerHTML = `Atenção, o ingrediente ${gluten.nome} contem gluten`
        aviso_alergia.classList.add('contem-gluten')
    } else {
        aviso_alergia.classList.remove('contem-gluten')
        aviso_alergia.innerHTML = 'Nenhum ingrediente contem gluten'
        aviso_alergia.classList.add('seguro')
    }
})