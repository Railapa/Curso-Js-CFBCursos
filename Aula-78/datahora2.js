// 1. Selecionamos a div onde o relógio será exibido no HTML
const div_relogio = document.querySelector("#div_relogio");

// 2. Criamos a função que faz a "leitura" do tempo atual
const relogio = () => {
    // [00:01:40] Capturamos a "foto" do momento atual
    const data = new Date();

    // [00:02:10] Extraímos as horas e adicionamos o zero se for < 10
    let hora = data.getHours();
    hora = hora < 10 ? "0" + hora : hora;

    // [00:03:13] Extraímos os minutos e tratamos o zero à esquerda
    let minuto = data.getMinutes();
    minuto = minuto < 10 ? "0" + minuto : minuto;

    // [00:03:26] Extraímos os segundos e tratamos o zero à esquerda
    let segundo = data.getSeconds();
    segundo = segundo < 10 ? "0" + segundo : segundo;

    // [00:04:09] Montamos a string final formatada (HH:MM:SS)
    const hora_completa = hora + ":" + minuto + ":" + segundo;

    // [00:04:27] Injetamos o texto formatado dentro da div no HTML
    div_relogio.innerHTML = hora_completa;
};

// [00:05:14] O "Coração" do relógio: Executa a função acima a cada 1000ms (1 segundo)
const intervalo = setInterval(relogio, 1000);

/* 

Detalhamento Técnico das Linhas:
Linha 4 (const data = new Date()): [01:40] É fundamental que esta linha esteja dentro da função. Se estivesse fora, o objeto data seria fixo no momento em que a página carregou e o relógio ficaria parado.

Linhas 7, 11 e 15 (Operador Ternário): [02:46] O professor utiliza a lógica condicao ? verdadeiro : falso. Isso garante que o visual do relógio não "pule" de tamanho quando passar de 9 para 10 segundos.

Linha 19 (hora_completa): [04:09] Aqui ocorre a concatenação manual das strings com os dois pontos :.

Linha 25 (setInterval): [05:14] Esta função do navegador recebe dois parâmetros:

relogio: O nome da função que criamos (sem os parênteses (), pois queremos que o JS a chame depois).

1000: O tempo de espera entre cada chamada, em milissegundos. Sem essa linha, a função relogio só rodaria uma vez e o ponteiro não se moveria.

💡 Dica de Ouro da Aula:
O professor ressalta que esse relógio baseia-se no horário do sistema operacional do usuário. Se o usuário mudar a hora do computador dele manualmente, o seu relógio no site também mudará.
*/