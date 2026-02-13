const caixa = document.querySelector('#caixa')

let musicas = new Set(['musica1', 'musica boa', 'musica10'])

musicas.add('musica muito legal')
musicas.add('musica1')
musicas.add('musica1')
musicas.add('musica10')

musicas.delete('musica muito legal')
//musicas.clear()

console.log(musicas)

musicas.forEach((el) => {
    caixa.innerHTML += `${el} <br/>` 
})

/*
1. O que é a Coleção Set?
É uma coleção de valores onde cada elemento deve ser único.

Se tentares adicionar um valor que já existe, o Set simplesmente ignora a nova entrada.

Ao contrário do Map, o Set não utiliza o sistema de Chave-Valor; ele guarda apenas o valor.

2. Comandos e Métodos do Set
new Set(): Instancia a coleção. Podes passar um array no construtor para já iniciar com valores.

add(valor): Adiciona um novo elemento.

has(valor): Verifica se o elemento existe na coleção.

delete(valor): Remove um elemento específico.

clear(): Limpa toda a coleção.

size: Propriedade que retorna a quantidade de elementos únicos.

3. Como percorrer um Set?
Como o Set é uma coleção iterável, podes usar:

.forEach(): Método interno da coleção.

for...of: Estrutura de repetição externa que funciona perfeitamente com Set.
*/