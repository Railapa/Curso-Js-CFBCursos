const in_nota1 = document.querySelector('#in_nota1')
const in_nota2 = document.querySelector('#in_nota2')
const btn_gerar = document.querySelector('#btn_gerar')
const painel_aluno = document.querySelector('#painel_aluno')
const res_media = document.querySelector('#res_media')
const res_status = document.querySelector('#res_status')

class Boletim{
    constructor(nota1,nota2){
        this.nota1 = nota1
        this.nota2 = nota2
    }

    calcularMedia(){
        return (this.nota1 + this.nota2) / 2
    }

    obterStatus(){
        const media = (this.nota1 + this.nota2) / 2
        if(media >= 7){
            return 'APROVADO!'
        } else {
            return 'REPROVADO'
        }
    }
}

btn_gerar.addEventListener('click', () => {
    const novoBoletim = new Boletim(Number(in_nota1.value), Number(in_nota2.value))

    painel_aluno.style.display = 'block'
    res_media.innerHTML = novoBoletim.calcularMedia()

    res_status.innerHTML = novoBoletim.obterStatus()
})