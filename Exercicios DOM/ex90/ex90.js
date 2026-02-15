const input_cor = document.querySelector('#input-cor')
const btn_traduzir = document.querySelector('#btn-traduzir')
const res_traducao = document.querySelector('#res-traducao')

const cores = new Map()
cores.set('vermelho', '#ff0000')
cores.set('roxo', '	#BA55D3')

btn_traduzir.addEventListener('click', () => {
    if(cores.has(input_cor.value)){
        document.body.style.backgroundColor = cores.get(input_cor.value)
        res_traducao.innerHTML = ''
    } else {
        res_traducao.innerHTML = 'Cor indisponivel'
    }
})