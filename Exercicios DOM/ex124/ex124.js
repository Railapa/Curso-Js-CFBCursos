const btn_check = document.querySelector('#btn_check')
const status_decolagem = document.querySelector('#status_decolagem')
const checklist = ["Combustível OK", "Motores OK", "Tripulação OK", "Clima OK"];

btn_check.addEventListener('click', () => {
    const ok = checklist.every((val) => {
        return val.includes('OK')
    })

    if(ok){
        status_decolagem.classList.add('ready')
        status_decolagem.innerHTML = '🛫 Autorizado! Todos os sistemas operacionais.'
    } else {
        status_decolagem.classList.remove('ready')
        status_decolagem.innerHTML = '🛑 Abortar! Verifique os itens pendentes no checklist.'
        status_decolagem.classList.add('wait')
    }
})