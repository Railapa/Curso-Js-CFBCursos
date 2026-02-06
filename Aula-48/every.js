const p_array = document.querySelector('#array')
const txt_pesquisar = document.querySelector('#txt_pesquisar')
const btnVerificar = document.querySelector('#btnVerificar')
const resultado = document.querySelector('#resultado')

const elementos_array = [21,25,19,20,19,18,22]
p_array.innerHTML = `[${elementos_array}]`

btnVerificar.addEventListener('click', () => {
    const retorno = elementos_array.every((el, ind) => {
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
O método every() funciona como um fiscal rigoroso que percorre o array e verifica se todos os elementos cumprem uma determinada regra. Ao contrário do find() ou do filter(), o every() devolve sempre um valor booleano: true ou false.

Pontos principais da Aula 48:
Regra do "Todos": O every() só devolve true se todos os elementos do array passarem no teste da função que especificares.

Interrupção Imediata: Se ele encontrar um único elemento que não cumpra a regra, ele para a execução e devolve false.

Parâmetros: Recebe uma função anónima com o elemento (el), a posição (i) e o próprio array.

Exemplo Prático: No vídeo, o professor usa-o para verificar se todos os utilizadores num array têm idade maior ou igual a 18 anos.
*/