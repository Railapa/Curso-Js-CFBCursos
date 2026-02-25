const Nave = function(energia){
    this.energia = energia
    this.disparos = 10
}

const n1 = new Nave(100)

Nave.prototype.vida = 50

Nave.prototype.disparar = function(){
    if(this.disparos > 0){
        this.disparos--
    } else {
        this.disparos = 'Disparos insuficientes'
    }
}

console.log(Nave)
console.log(n1)
console.log(n1.energia)
console.log(n1.vida)

n1.disparar()
n1.disparar()
n1.disparar()
n1.disparar() 
n1.disparar()

console.log(n1.disparos)

/* 
1. O que é o Prototype?
O Prototype é como um "plano de fundo" compartilhado por todos os objetos de uma mesma classe ou função construtora. Ele serve para adicionar novas propriedades ou métodos a uma classe depois que ela já foi criada ou até mesmo em tempo de execução.

2. Por que usar o Prototype?
Embora você possa adicionar propriedades a um objeto individualmente, o Prototype permite que você adicione algo à base da classe. Isso garante que:

Todos os objetos (mesmo os que já foram criados) recebam a nova funcionalidade.

Economia de memória: O método não é copiado para cada objeto novo; todos os objetos apenas "apontam" para o mesmo método que reside no Prototype.

3. Como utilizar na prática
No vídeo, o professor cria uma classe Nave e, posteriormente, usa o Prototype para adicionar características que não estavam no código original:

Adicionando Propriedade: Nave.prototype.vidas = 3.

Adicionando Método: Nave.prototype.disparar = function() { ... }.

4. Quando é realmente necessário?
O professor explica que você deve usar o Prototype quando precisar expandir uma classe de forma dinâmica.

Cenário Real: Imagine que seu jogo está rodando e, após um evento especial, todas as naves ganham uma nova habilidade de "Escudo". Em vez de mudar cada nave uma por uma, você adiciona o "Escudo" no Nave.prototype e todas as naves do jogo passam a ter acesso a ele instantaneamente.

Resumo visual:

Atributo Comum: Definido dentro do constructor.

Prototype: Definido fora, permitindo expansão dinâmica da classe para todos os seus objetos.
*/