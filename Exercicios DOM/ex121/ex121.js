const btn_prosseguir = document.querySelector('#btn_prosseguir')
const termo = [...document.querySelectorAll('.termo')]


const validarCheckboxs = () => {
    const checkbox = termo.every((val) => {
        return val.checked === true
    })
    
    if(checkbox){
        btn_prosseguir.classList.remove('bloqueado')
        btn_prosseguir.classList.add('liberado')
        btn_prosseguir.disabled = false
    } else {
        btn_prosseguir.classList.remove('liberado')
        btn_prosseguir.classList.add('bloqueado')
        btn_prosseguir.disabled = true
    }
}

termo.map((el) => {
    el.addEventListener('change', validarCheckboxs)
})