const btn_analisar = document.querySelector('#btn_analisar')
const painel_info = document.querySelector('#painel_info')
const res_ano = document.querySelector('#res_ano')
const res_turno = document.querySelector('#res_turno')
const msg_boas_vindas = document.querySelector('#msg_boas_vindas')

btn_analisar.addEventListener('click', () => {
    const data = new Date()
    const ano = data.getFullYear()

    painel_info.style.display = 'block'
    res_ano.innerHTML = ano

    let hora = data.getHours()

    if(hora < 12){
        res_turno.innerHTML = 'Manhã'
        msg_boas_vindas.innerHTML = 'Bom dia!'
        document.body.style.backgroundColor = '#FFD700'
    } else if(hora < 18){
        res_turno.innerHTML = 'Tarde'
        msg_boas_vindas.innerHTML = 'Boa Tarde!'
        document.body.style.backgroundColor = '#F4A460'
    } else {
        res_turno.innerHTML = 'Noite'
        msg_boas_vindas.innerHTML = 'Boa Noite!'
        document.body.style.backgroundColor = '#363636'
    }
})