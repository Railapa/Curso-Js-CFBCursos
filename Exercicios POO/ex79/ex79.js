const display = document.querySelector('#display')
const btn_aniversario = document.querySelector('#btn_aniversario')

const pessoa = {
    nome: 'Bruno',
    idade: 19,
    estudo: 'UNIFACS',

    envelhecer(){
        return display.innerHTML = this.idade++
    }
}

const copiaPessoa = Object.assign({}, pessoa)
copiaPessoa.nome = 'CFB Cursos'
console.log(copiaPessoa.nome)
console.log(pessoa.nome)

delete pessoa.estudo

console.log(pessoa.estudo)

btn_aniversario.addEventListener('click', () => {
    pessoa.envelhecer()
})