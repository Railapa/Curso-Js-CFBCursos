const p_array = document.querySelector('#array')
const txt_pesquisar = document.querySelector('#txt_pesquisar')
const btnVerificar = document.querySelector('#btnVerificar')
const resultado = document.querySelector('#resultado')

const elementos_array = [16,12,10,17,15,13,11]
p_array.innerHTML = `[${elementos_array}]`

btnVerificar.addEventListener('click', () => {
    const retorno = elementos_array.some((el, ind) => {
        if(el < 18){
            resultado.innerHTML = `Array não conforme posição ${ind}`
        }
        return el >= 18
    })
    if(retorno){
        resultado.innerHTML = 'Ok'
    }

    console.log(retorno)
})

/* 
Como o professor explica no vídeo, o some() é o "irmão menos exigente" do every():

every(): Exige que todos os elementos passem no teste.

some(): Fica satisfeito se pelo menos um (ou mais) elemento passar no teste.

Pontos principais da Aula 49:
Tradução: "Some" em inglês, neste contexto, significa "algum" ou "pelo menos um".

Funcionamento: Ele percorre o array e, assim que encontra o primeiro elemento que satisfaz a condição, ele para a busca e retorna true.

Resultado Negativo: Ele só retorna false se percorrer o array inteiro e não encontrar absolutamente ninguém que cumpra a regra.

Sintaxe: É idêntica à do every(), recebendo o elemento (el), o índice (i) e o array completo.
*/