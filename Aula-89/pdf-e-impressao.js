const btn_imp = document.getElementById("btn_imp");

btn_imp.addEventListener("click", (evt) => {
    // 1. Pega apenas o conteúdo HTML da tabela (sem os botões de fora)
    const conteudo = document.getElementById('tabela').innerHTML;

    // 2. Cria uma string com o CSS para a tabela ficar bonita no papel
    let estilo = "<style>";
    estilo += "table {width: 100%; font: 20px Calibri;}"
    estilo += "table, th, td {border: solid 2px #888; border-collapse: collapse;";
    estilo += "padding: 4px 8px; text-align: center;}";
    estilo += "</style>";

    // 3. Abre uma nova janela temporária (vazia)
    // Parâmetros: URL (vazia), Nome (vazio), Configurações (tamanho)
    const win = window.open('', '', 'height=700,width=700');

    // 4. Escreve a estrutura básica de uma página HTML dentro dessa nova janela
    win.document.write('<html><head>');
    win.document.write('<title>CFB Cursos - Impressão</title>');
    win.document.write(estilo); // Adiciona o CSS que criamos acima
    win.document.write('</head><body>');
    win.document.write(conteudo); // Adiciona a tabela que capturamos
    win.document.write('</body></html>');

    // 5. Comando para imprimir o conteúdo desta NOVA JANELA
    win.print();

    // 6. Fecha a janela temporária após o usuário imprimir ou cancelar
    win.close();
});