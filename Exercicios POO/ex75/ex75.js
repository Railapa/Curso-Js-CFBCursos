const txt_modelo = document.querySelector('#txt_modelo')
const txt_velocidade = document.querySelector('#txt_velocidade')
const btn_acelerar = document.querySelector('#btn_acelerar')
const btn_travar = document.querySelector('#btn_travar')
const msg_alerta = document.querySelector('#msg_alerta')

class Carro{
    constructor(modelo){
        this.modelo = modelo
        this.velocidade = 0
    }

    acelerar(){
         if(this.velocidade >= 200){
            alert('Limite de 200Km/h atingido!')
         } else {
            this.velocidade += 10
         }
    }

    desacelerar(){
        if(this.velocidade <= 0){
            alert('O carro já está parado!')
        } else {
            this.velocidade -= 10
        }
         
    }
}

const c1 = new Carro('Corolla')
txt_modelo.innerHTML = c1.modelo

btn_acelerar.addEventListener('click', () => {
     c1.acelerar()
     txt_velocidade.innerHTML = c1.velocidade
})

btn_travar.addEventListener('click', () => {
    c1.desacelerar()
    txt_velocidade.innerHTML = c1.velocidade
})