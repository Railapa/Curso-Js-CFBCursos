const div_relogio = document.querySelector("#div_relogio");
const div_data = document.querySelector("#div_data");
const btn_ativar = document.querySelector("#btn_ativar");
const btn_parar = document.querySelector("#btn_parar");
const tmp_alarme = document.querySelector("#tmp_alarme");
const hora_alarme = document.querySelector("#hora_alarme");
const timer = document.querySelector("#timer");

let ts_atual = null
let ts_alarme = null
let alarme_ativado = false
let alarme_tocando = false

btn_ativar.addEventListener('click', () => {
    
})

btn_parar.addEventListener('click', () => {

})

const relogio = () => {
    const data = new Date();

    let hora = data.getHours();
    hora = hora < 10 ? "0" + hora : hora;

    let minuto = data.getMinutes();
    minuto = minuto < 10 ? "0" + minuto : minuto;

    let segundo = data.getSeconds();
    segundo = segundo < 10 ? "0" + segundo : segundo;

    const hora_completa = hora + ":" + minuto + ":" + segundo;

    div_relogio.innerHTML = hora_completa;
};

const intervalo = setInterval(relogio, 1000);