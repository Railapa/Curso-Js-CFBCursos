class Bola {
    // ... (constructor e desenhar das aulas anteriores)

    // Verifica se a bola atingiu os limites do palco
    controleBordas = () => {
        // Lógica Horizontal (Direita e Esquerda)
        if (this.px + this.tam >= larguraPalco) {
            this.dirx = -1; // Bateu na direita, volta para esquerda
        } else if (this.px <= 0) {
            this.dirx = 1; // Bateu na esquerda, vai para direita
        }

        // Lógica Vertical (Baixo e Cima)
        if (this.py + this.tam >= alturaPalco) {
            this.diry = -1; // Bateu no fundo, sobe
        } else if (this.py <= 0) {
            this.diry = 1; // Bateu no topo, desce
        }
    }

    // O "motor" da bolinha
    controlar = () => {
        this.controleBordas(); // Primeiro, checa se vai bater
        
        // Atualiza a posição somando (direção * velocidade)
        this.px += this.dirx * this.velx;
        this.py += this.diry * this.vely;

        // Atualiza a posição visual no HTML (precisa do 'px' no final!)
        this.eu.style.left = this.px + "px";
        this.eu.style.top = this.py + "px";

        // Se a bola fugir do palco (ex: ao diminuir a janela), ela se auto-destrói
        if (this.px > larguraPalco || this.py > alturaPalco) {
            this.remover();
        }
    }
}