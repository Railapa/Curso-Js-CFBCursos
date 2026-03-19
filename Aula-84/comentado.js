class Bola {
    constructor(arrayBolas, palco) {
        // ... (as propriedades de cor, tamanho e posição da aula anterior continuam aqui)

        // 1. VELOCIDADE E DIREÇÃO
        // Velocidade aleatória entre 0.5 e 2.5
        this.velx = Math.floor(Math.random() * 2) + 0.5;
        this.vely = Math.floor(Math.random() * 2) + 0.5;
        
        // Direção: Sorteia 0 a 10. Se > 5 vai para um lado (1), senão vai para o outro (-1)
        this.dirx = (Math.random() * 10 > 5) ? 1 : -1;
        this.diry = (Math.random() * 10 > 5) ? 1 : -1;

        // 2. IDENTIFICAÇÃO ÚNICA
        this.palco = palco;
        this.arrayBolas = arrayBolas;
        // Cria um ID único misturando tempo atual e um número aleatório enorme
        this.id = Date.now() + "_" + Math.floor(Math.random() * 100000000000);

        // 3. MÉTODOS DE CONTROLE (O QUE A BOLA FAZ)
        this.desenhar(); // Função que vai criar a 'div' no HTML
        
        // Inicia o movimento: a cada 10ms, executa a função 'controlar'
        this.controle = setInterval(this.controlar, 10);
        
        // Guarda a referência da bolinha no DOM (o elemento HTML real)
        this.eu = document.getElementById(this.id);
    }

    // Esboço dos métodos que serão programados nas próximas aulas:
    desenhar() { /* Cria a div no palco */ }
    controlar() { /* Atualiza a posição e checa colisões */ }
}