const txt_poder = document.querySelector('#txt_poder')
const poder_final = document.querySelector('#poder_final')
const btn_forjar = document.querySelector('#btn_forjar')

btn_forjar.addEventListener('click', () => {
    poder_final.innerHTML = ''
    const gerarPoder = Math.floor(Math.random() * (100 - 10 + 1)) + 10
    const poderMinimo = Math.max(gerarPoder, 35)

    txt_poder.innerHTML = gerarPoder

    if(gerarPoder === 100){
        poder_final.innerHTML = `Bônus especial! <br/> 
       Seu poder foi para: ${Math.pow(gerarPoder, 2)}`
    } else {
        poder_final.innerHTML = poderMinimo
    }
})