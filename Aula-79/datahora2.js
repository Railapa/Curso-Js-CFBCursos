// Seleção de elementos do DOM (HTML) para serem usados no JavaScript
const div_relogio = document.querySelector("#div_relogio"); // Onde o relógio digital aparece
const div_data = document.querySelector("#div_data");       // Onde a data aparece (se configurada)
const btn_ativar = document.querySelector("#btn_ativar");   // Botão para ligar o alarme
const btn_parar = document.querySelector("#btn_parar");     // Botão para desligar o alarme
const tmp_alarme = document.querySelector("#tmp_alarme");   // Input onde o usuário digita os segundos
const hora_alarme = document.querySelector("#hora_alarme"); // Texto que mostra o horário programado do alarme
const timer = document.querySelector("#timer");             // A div pai (usada para mudar a cor de fundo)

// Variáveis de controle de estado do sistema
let ts_atual = null;         // Timestamp do momento em que o botão foi clicado
let ts_alarme = null;        // Timestamp calculado para o momento do alarme tocar
let alarme_ativado = false;  // Booleano para saber se o alarme está "armado"
let alarme_tocando = false;  // Booleano para saber se o som está tocando no momento

// Configuração do Áudio
const som_alarme = new Audio('alarme.mp3'); // Cria o objeto de som com o arquivo mp3
som_alarme.loop = -1; // Define loop infinito (-1 ou true) para o som não parar sozinho (caso queira que o loop repite 3x por exemplo, basta colocar .loop = 3)

// Evento do botão ATIVAR
btn_ativar.addEventListener('click', () => {
    ts_atual = Date.now(); // Pega o tempo atual em milissegundos (timestamp)
    
    // Calcula o tempo do alarme: Tempo agora + (segundos digitados * 1000 para milissegundos)
    ts_alarme = ts_atual + (tmp_alarme.value * 1000); 
    
    alarme_ativado = true; // Ativa o "vigia" do alarme no relógio
    
    // Converte o timestamp calculado em um objeto de Data para ser legível
    const dt_alarme = new Date(ts_alarme);
    
    // Mostra no HTML a hora exata que o alarme vai disparar
    hora_alarme.innerHTML = `Hora do Alarme: ${dt_alarme.getHours()}:${dt_alarme.getMinutes()}:${dt_alarme.getSeconds()}`;
});

// Evento do botão PARAR
btn_parar.addEventListener('click', () => {
    // Reseta a interface e o estado
    hora_alarme.innerHTML = `Hora do Alarme`;
    tmp_alarme.value = 0;
    alarme_ativado = false; // Desarma o alarme
    alarme_tocando = false; // Indica que não está mais tocando
    
    timer.classList.remove('alarme'); // Remove o fundo vermelho (classe CSS)
    
    som_alarme.pause(); // Interrompe o som
    som_alarme.currentTime = 0; // Reinicia o áudio do segundo zero
});

// Função principal que atualiza o relógio a cada segundo
const relogio = () => {
    const data = new Date(); // Cria um novo objeto com a hora exata de agora

    // Formatação de Hora, Minuto e Segundo com zero à esquerda (Operador Ternário)
    let hora = data.getHours();
    hora = hora < 10 ? "0" + hora : hora;

    let minuto = data.getMinutes();
    minuto = minuto < 10 ? "0" + minuto : minuto;

    let segundo = data.getSeconds();
    segundo = segundo < 10 ? "0" + segundo : segundo;

    const hora_completa = hora + ":" + minuto + ":" + segundo;

    // Atualiza o relógio na tela
    div_relogio.innerHTML = hora_completa;

    // Lógica do Alarme: Verifica se deve tocar
    // Só entra se o alarme estiver armado (ativado) E se ainda não estiver tocando
    if (alarme_ativado && !alarme_tocando) {
        // Se o tempo de agora (getTime) for igual ou maior que o tempo programado (ts_alarme)
        if (data.getTime() >= ts_alarme) {
            alarme_tocando = true; // Evita que este bloco rode repetidamente a cada segundo
            som_alarme.play();     // Inicia o som
            timer.classList.add('alarme'); // Adiciona a classe CSS que deixa o fundo vermelho
        }
    }
};

// Define o intervalo para a função 'relogio' rodar a cada 1000ms (1 segundo)
const intervalo = setInterval(relogio, 1000);