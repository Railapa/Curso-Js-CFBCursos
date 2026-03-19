// 1. CAPTURA DE ELEMENTOS DO DOM (HTML)
// Seleciona a div onde as bolinhas vão "morar"
const palco = document.getElementById("palco");

// Seleciona o elemento que mostra o número total de objetos na tela
const num_objetos = document.getElementById("num_objetos");

// Seleciona o campo de entrada (input) onde o usuário digita a quantidade
const txt_qtde = document.getElementById("txt_qtde");

// Seleciona os botões de ação
const btn_add = document.getElementById("btn_add");
const btn_remover = document.getElementById("btn_remover");

// 2. VARIÁVEIS DE CONTROLE DO AMBIENTE
// Pega a largura atual da div 'palco' (ex: 1920px)
let larguraPalco = palco.offsetWidth;

// Pega a altura atual da div 'palco' (ex: 1080px)
let alturaPalco = palco.offsetHeight;

// Array vazio que vai guardar todos os objetos 'Bola' que criarmos
let bolas = [];

// Variável para contar quantas bolas existem no momento
let numBolas = 0;