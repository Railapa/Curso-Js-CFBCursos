const in_busca = document.querySelector('#in_busca')
const btn_buscar = document.querySelector('#btn_buscar')
const resultado = document.querySelector('#resultado')

const colaboradores = [
    { id: "101", nome: "Ana Silva", cargo: "Desenvolvedora Front-end", email: "ana@empresa.com" },
    { id: "102", nome: "Bruno Costa", cargo: "Designer UX", email: "bruno@empresa.com" },
    { id: "103", nome: "Carla Souza", cargo: "Gerente de Projetos", email: "carla@empresa.com" },
    { id: "104", nome: "Diego Lima", cargo: "Analista de Dados", email: "diego@empresa.com" }
]

btn_buscar.addEventListener('click', () => {
    resultado.innerHTML = ''
    const IDcolaboradores = colaboradores.find((val) => {
        return val.id == Number(in_busca.value) || val.nome == in_busca.value || val.email == in_busca.value
    })

    if(IDcolaboradores){
        resultado.innerHTML += `<div class="perfil-card"> Nome: ${IDcolaboradores.nome} <br/> Cargo: ${IDcolaboradores.cargo} <br/> E-mail: ${IDcolaboradores.email} <div/>`
    } else {
        resultado.innerHTML = 'Colaborador não encontrado.'
    }
})