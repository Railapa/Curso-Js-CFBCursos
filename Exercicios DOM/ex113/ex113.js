const select_categoria = document.querySelector('#select_categoria')
const input_titulo = document.querySelector('#input_titulo')
const btn_localizar = document.querySelector('#btn_localizar')
const resultado_busca = document.querySelector('#resultado_busca')

const acervo = [
    { titulo: "Hobbit", categoria: "Ficção", corredor: "A-1" },
    { titulo: "Drácula", categoria: "Terror", corredor: "B-4" },
    { titulo: "Sapiens", categoria: "História", corredor: "C-2" },
    { titulo: "It", categoria: "Terror", corredor: "B-5" }
];

btn_localizar.addEventListener('click', () => {
    const livros_encontrados = acervo.find((val) => {
        return input_titulo.value.toUpperCase() === val.titulo.toUpperCase() && select_categoria.value === val.categoria
    })

    if(livros_encontrados){
        resultado_busca.innerHTML = `Titulo: ${livros_encontrados.titulo} <br/> Categoria: ${livros_encontrados.categoria} <br/> Corredor: ${livros_encontrados.corredor}` 
    } else {
        resultado_busca.innerHTML = 'Livro não encontrado'
    }
})