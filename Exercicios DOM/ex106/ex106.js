const input_id = document.querySelector('#input_id')
const btn_buscar = document.querySelector('#btn_buscar')
const resultado = document.querySelector('#resultado')

const funcionarios = [
    { id: 1, nome: "Raí", setor: "Tecnologia" },
    { id: 2, nome: "Ana", setor: "Marketing" },
    { id: 3, nome: "Carlos", setor: "Vendas" }
];

btn_buscar.addEventListener('click', () => {
    const id = Number(input_id.value)
    const funcionario = funcionarios.find((e,i) => {
        return id === e.id
    })

    if(funcionario){
        resultado.innerHTML = `Nome: ${funcionario.nome} <br/> Setor: ${funcionario.setor}`
    } else {
        resultado.innerHTML = 'Funcionario não encontrado'
    }
})