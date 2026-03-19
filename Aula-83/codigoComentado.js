// 1. ATUALIZAÇÃO DO PALCO AO REDIMENSIONAR
// Adiciona um evento na janela para monitorar mudanças de tamanho
window.addEventListener("resize", (evt) => {
    // Atualiza as variáveis globais com a nova largura e altura da div 'palco'
    larguraPalco = palco.offsetWidth;
    alturaPalco = palco.offsetHeight;
});

// 2. BOTÃO ADICIONAR
btn_add.addEventListener("click", (evt) => {
    // Pega o valor digitado no input de quantidade
    const qtde = txt_qtde.value;
    // Faz um loop para criar a quantidade de bolas pedida
    for (let i = 0; i < qtde; i++) {
        // Aqui ele instanciará a classe (será feito na próxima parte)
    }
});

// 3. DEFINIÇÃO DA CLASSE BOLA
class Bola {
    constructor() {
        // Define um tamanho aleatório entre 10 e 24px
        this.tam = Math.floor(Math.random() * 15) + 10;

        // Gera cores aleatórias para compor o RGB da bolinha
        this.r = Math.floor(Math.random() * 255);
        this.g = Math.floor(Math.random() * 255);
        this.b = Math.floor(Math.random() * 255);

        // Define a posição X (horizontal) inicial aleatória
        // Largura do palco menos o tamanho da bola para não fugir da borda
        this.px = Math.floor(Math.random() * (larguraPalco - this.tam));

        // Define a posição Y (vertical) inicial aleatória
        this.py = Math.floor(Math.random() * (alturaPalco - this.tam));
    }
}