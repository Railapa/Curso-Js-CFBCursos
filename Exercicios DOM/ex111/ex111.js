const input_servico = document.querySelector('#input_servico')
const btn_ligar = document.querySelector('#btn_ligar')
const resultado_busca = document.querySelector('#resultado_busca')

const servicos = [
    { nome: "Polícia", numero: "190" },
    { nome: "Bombeiros", numero: "193" },
    { nome: "Ambulância", numero: "192" }
];

btn_ligar.addEventListener('click', () => {
    const numero = servicos.find((val) => {
        return input_servico.value.toUpperCase() === val.nome.toUpperCase()
    })

    if(numero){
        resultado_busca.innerHTML = `Serviço: ${numero.nome} <br/> Numero: ${numero.numero}`
    }
})