// Este é o link da API pronta que substitui o Replit
const endpoint = "https://jsonplaceholder.typicode.com/todos/1";

const fetchFaturamento = () => {
    fetch(endpoint)
        .then(res => res.json()) // Converte a resposta para um objeto JS
        .then(dados => {
            console.log(dados); // Mostra os dados no console do navegador
            // Aqui você pode manipular os dados, como o professor fará na próxima aula
        })
        .catch(erro => console.error("Erro na requisição:", erro));
};

fetchFaturamento();