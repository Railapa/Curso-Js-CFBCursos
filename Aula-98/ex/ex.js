const n1 = 'Bruno'
const n2 = 'Bruno'

console.log(n1 === n2)

const s1 = Symbol('cfb')
const s2 = Symbol('cfb')

console.log(s1 === s2)

const s3 = Symbol.for("Canal")
const s4 = Symbol.for("Canal")
console.log(s3 === s4)

/* 
📝 Exercício 406: O Teste da Identidade Única
Siga estes passos no seu editor ou console:

Crie duas variáveis que recebam uma String idêntica:

const nome1 = "Bruno"

const nome2 = "Bruno"

Compare as duas (nome1 === nome2) e veja que o resultado é true.

Crie dois Symbols com a mesma descrição:

const s1 = Symbol("CFB")

const s2 = Symbol("CFB")

A Hora da Verdade:

Tente comparar os dois Symbols: console.log(s1 === s2).

O resultado será false. Por quê? Porque mesmo tendo o mesmo nome ("CFB"), o JavaScript criou dois identificadores únicos e diferentes na memória.

O Registro Global:

Agora, crie dois Symbols usando o registro global:

const s3 = Symbol.for("Canal")

const s4 = Symbol.for("Canal")

Compare estes dois: console.log(s3 === s4).

Desta vez será true. Por quê? Porque o .for() procura se já existe um símbolo com o nome "Canal" no registro global e, se existir, ele reutiliza o mesmo.

💡 Resumo para não esquecer:
Symbol(): Cria um ID novo, único e "secreto". Mesmo que você crie outro igualzinho, eles são diferentes.

Symbol.for(): Cria um ID "público" (no registro global). Se você pedir o mesmo nome de novo, ele te dá o mesmo ID.

Tente fazer essas 3 comparações (Strings, Symbols comuns e Symbols Globais). Quando o console mostrar false para os símbolos que parecem iguais, você terá entendido a essência da Aula 98!
*/