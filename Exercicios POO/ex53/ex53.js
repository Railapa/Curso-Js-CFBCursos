const btn_adicionar = document.querySelector('#btn_adicionar')
const container_equipe = document.querySelector('#container_equipe')
const departamento = document.querySelector('#departamento')
const nome = document.querySelector('#nome')
const cargo = document.querySelector('#cargo')

class MembroEquipe{
    constructor(Pnome, Pcargo, Pdepartamento){
        this.pnome = Pnome
        this.pcargo = Pcargo
        this.pdepartamento = Pdepartamento
    }

    redenrizar(){
        const div = document.createElement('div')
        div.setAttribute('class', 'card-membro')
        div.innerHTML = `Nome: ${this.pnome} <br/> Cargo: ${this.pcargo} <br/> Departamento: ${this.pdepartamento}`
        if(this.pdepartamento === 'Admin'){
            div.style.borderLeftColor = 'gold'
        } else if(this.pdepartamento === 'Design'){
            div.style.borderLeftColor = 'dodgerblue'
        } else {
            div.style.borderLeftColor = 'limegreen'
        }

        container_equipe.appendChild(div)
    }
}


btn_adicionar.addEventListener('click', () => {
    const n = nome.value
    const c = cargo.value
    const d = departamento.value

    const novoMembro = new MembroEquipe(n, c, d);
    novoMembro.redenrizar();

    nome.value = ""
    cargo.value = ""
    nome.focus()
})