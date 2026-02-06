const notasTurma = document.querySelector('#notas-turma')
const btnVerificar = document.querySelector('#btn-verificar')
const resultado = document.querySelector('#resultado-verificacao')
const notas = [12, 15, 18, 9, 14, 11]
notasTurma.innerHTML = notas

btnVerificar.addEventListener('click', () => {
    const retorno = notas.every((el, ind) => {
        if(el < 10){
            resultado.innerHTML = `A turma foi reprovada na posição ${ind}`
        } else {
            resultado.innerHTML = `A turma foi aprovada`
        }

        return el > 10
    })
})