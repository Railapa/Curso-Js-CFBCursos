const input_codigo = document.querySelector('#input_codigo')
const btn_rastrear = document.querySelector('#btn_rastrear')
const rastreio_info = document.querySelector('#rastreio_info')

const encomendas = [
    { codigo: "BR123", status: "Em trânsito", previsao: "2 dias" },
    { codigo: "PT456", status: "Entregue", previsao: "Finalizado" },
    { codigo: "US789", status: "Aguardando pagamento", previsao: "Indisponível" }
];

btn_rastrear.addEventListener('click', () => {
    const encomendas_rastreadas = encomendas.find((val) => {
        return input_codigo.value.toUpperCase() === val.codigo 
    })

    if(encomendas_rastreadas){
        rastreio_info.innerHTML = `Codígo: ${encomendas_rastreadas.codigo} <br/> Status: ${encomendas_rastreadas.status} <br/> Previsão: ${encomendas_rastreadas.previsao}`
    } else {
        rastreio_info.innerHTML = 'Codigo não encontrado'
    }

    input_codigo.value = ''
    input_codigo.focus()
})