// Este é o link da API pronta que substitui o Replit
const endpoint = "https://jsonplaceholder.typicode.com/todos/1";

fetch(endpoint)
.then(res => res.json())
.then(dados => {
    console.log(dados)
})