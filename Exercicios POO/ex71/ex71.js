const in_marca = document.querySelector('#in_marca')
const in_ram = document.querySelector('#in_ram')
const btn_ligar = document.querySelector('#btn_ligar')
const btn_info = document.querySelector('#btn_info')
const tela_status = document.querySelector('#tela_status')

class Dispositivo{
    constructor(marca){
        this.marca = marca
        this.ligado = false
    }

    alternarEnergia(){
        this.ligado = true
        return 'Ligado'
    }
}

class Smartphone extends Dispositivo{
    constructor(marca, ram){
        super(marca)
        this.ram = ram
    }

    especificacoes(){
        return `Marca: ${this.marca} <br/> RAM: ${this.ram}`
    }
}


btn_info.addEventListener('click', () => {
    const novoDispositivo = new Smartphone(in_marca.value, Number(in_ram.value))
    tela_status.innerHTML = novoDispositivo.especificacoes() + 'GB'
})