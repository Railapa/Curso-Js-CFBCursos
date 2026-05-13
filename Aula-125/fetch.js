const p_temp = document.querySelector('#p_temp')
const p_nivel = document.querySelector('#p_nivel')
const p_press = document.querySelector('#p_press')
const btn_texto = document.querySelector('#btn_texto')

const obeterDados = () => {

const endpoint = "http://localhost:1880/cfbcursos" // Endereço da API (no caso, o servidor NODE que criei no localhost)
fetch(endpoint) // Inicia a busca do endereço indicado
.then(res => res.json()) // Recebe a resposta bruta e a converte para JSON (objeto JS)
.then(dados => { // Recebe os dados ja convertidos em JSON e prontos para uso
    console.log(dados) // Mostra o ibjeto inteiro no console para conferencia
    p_temp.innerHTML = 'Temperatura: ' + dados.temperatura
    p_nivel.innerHTML = 'Nível: ' + dados.nivel
    p_press.innerHTML = 'Preesão: ' + dados.pressao
})
}

//let intervalo = setInterval(obeterDados, 2000)

let dados = { // Objeto com os dados que queremos enviar para o servidor
    nome: 'Bruno',
    canal: 'CFB Cursos',
    curso: 'JavaScript'
}

let cabecalho = { // Objeto de configuração do fetch (Necessario para mudar de GET para POST)
    method: 'POST', // Define que estamos ENVIANDO dados
    body: JSON.stringify(dados) // Converte o objeto JS em String JSON, pois a rede só transporta texto
}

const gravarDados = () => {
    const endpoint = "http://localhost:1880/gravar"
    fetch(endpoint, cabecalho) // Faz o fetch passando o endereço e as configurações de envio
    .then(res => res.json())
    .then(ret => {
        console.log(ret)
    }) 
}

btn_texto.addEventListener('click', gravarDados)