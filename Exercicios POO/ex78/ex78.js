const display_pc = document.querySelector('#display-pc')
const btn_upgrade = document.querySelector('#btn_upgrade')
const btn_remover = document.querySelector('#btn_remover')

const meuPC = {
    processador: 'i3',
    ram: '8GB',
    hd: '32GB'
}

const pecaNova = {
    gpu: 'RTX 4090',
    ram: '32GB',
}

btn_upgrade.addEventListener('click', () => {
    const instalar = Object.assign(meuPC, pecaNova)

    display_pc.innerHTML = `Processador: ${instalar.processador}, <br/> RAM: ${instalar.ram} <br/> GPU: ${instalar.gpu}, <br/> HD: ${instalar.hd} <br/>`

    
})

btn_remover.addEventListener('click', () => {
    delete meuPC.hd
})