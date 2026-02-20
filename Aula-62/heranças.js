class Carro{
    constructor(nome, portas){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = ''
    }

    ligar = function(){
        this.ligado = true
    }

    desligar = function(){
        this.ligado = false
    }

    setCor = function(cor){
        this.cor = cor
    } 
}

class Militar extends Carro{
    constructor(nome, portas, blindagem, municao){
        super(nome, portas)
        this.blindagem = blindagem
        this.municao = municao
    }

    atirar = function(){
        if(this.municao > 0){
            this.municao--
        }
    }
}

const c1 = new Carro('Normal', 4)
c1.ligar()
c1.setCor('Preto')

const c2 = new Militar('Lutador', 1, 100, 50)
c2.setCor('Verde')

 console.log(`Nome: ${c1.nome}`)
 console.log(`Portas: ${c1.portas}`)
 console.log(`Ligado: ${(c1.ligado ? 'Sim' : 'Não')}`)
 console.log(`Velocidade: ${c1.vel}`)
 console.log(`Cor: ${c1.cor}`)

 console.log(`---------------------------------`)

 console.log(`Nome: ${c2.nome}`)
 console.log(`Portas: ${c2.portas}`)
 console.log(`Ligado: ${(c2.ligado ? 'Sim' : 'Não')}`)
 console.log(`Velocidade: ${c2.vel}`)
 console.log(`Blindagem: ${c2.blindagem}`)
 console.log(`Munição: ${c2.municao}`)
 console.log(`Cor: ${c2.cor}`)

 /* 
 1. O que é Herança?
Imagine que você tem uma Classe Pai (também chamada de Classe Base) que contém características comuns a vários objetos. As Classes Filhas podem "herdar" tudo o que o pai tem, sem que você precise escrever tudo de novo.

No exemplo da aula: A classe Carro é o pai. Ela tem o básico: nome, número de portas e se está ligado.

2. A palavra-chave extends
É o comando que cria o vínculo de herança. Quando você escreve class Militar extends Carro, você está dizendo que o carro militar é um tipo de carro e, por isso, já nasce com nome, portas e motor.

3. O comando super()
Este é um dos pontos mais importantes:

Quando a classe filha tem o seu próprio construtor, ela deve chamar o super().

O super() serve para enviar para a classe pai as informações que ela precisa para "nascer" (como o nome e as portas no exemplo do vídeo).

Ele "invoca" o comportamento do pai dentro do filho.

4. Especialização
Além de herdar o que o pai tem, o filho pode ter coisas que são só dele:

O carro Militar (filho) ganha propriedades novas como blindagem e munição, e um método exclusivo chamado atirar().

O carro Normal (pai) não sabe atirar e não tem blindagem, mas o filho sabe fazer tudo o que o pai faz e mais um pouco.

5. Resumo Visual
Classe Pai (Carro): Nome, Portas, Ligar, Desligar.

Classe Filho (Militar): Herda tudo do pai + Blindagem, Munição, Atirar.

Classe Filho (Utilitário): Herda tudo do pai + Número de Lugare
 */