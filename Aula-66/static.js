class Npc{
    static alerta = false
    constructor(energia){
        this.energia = energia
    }

    info = function(){
        console.log(`Energia: ${this.energia}`)
        console.log(`Alerta: ${Npc.alerta}`)
        console.log(`------------------------`)
    }

    static alertar = function(){
        Npc.alerta = true
    }
}

const npc1 = new Npc(100)
const npc2 = new Npc(80)
const npc3 = new Npc(30)

//Npc.alerta = true
Npc.alertar()

npc1.info()
npc2.info()
npc3.info()

/* 
1. O que significa ser static?
Normalmente, quando você cria uma classe, cada objeto (new Classe()) tem suas próprias propriedades (como "energia" de um personagem). Já um membro estático pertence à fábrica (a classe) e não aos "produtos" (os objetos).

Exemplo prático: Em um jogo, se 100 NPCs precisam entrar em estado de alerta ao mesmo tempo, você não precisa avisar um por um. Você muda o "Alerta" na classe, e todos os NPCs consultam esse valor único.

2. Atributos Estáticos
Como funcionam: Você define uma propriedade diretamente na classe (ex: static alerta = false).

Diferença: Todos os objetos daquela classe vão ler exatamente o mesmo valor. Se você alterar esse valor na classe, ele muda para todos os objetos instantaneamente.

3. Métodos Estáticos
Como funcionam: São funções que você chama sem precisar criar um objeto com new.

Chamada: Você usa o nome da própria classe para chamar a função (ex: NPC.alertar()).

Regra de Ouro: Você não consegue chamar um método estático a partir de um objeto instanciado (ex: npc1.alertar() causará um erro).

4. Resumo Visual
Membro Comum: Cada objeto tem o seu. Se mudar no objeto A, o objeto B não é afetado.

Membro Estático: Existe apenas um para a classe inteira. Se mudar na classe, todos os objetos veem a mudança.
*/