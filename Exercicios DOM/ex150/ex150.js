const in_id = document.querySelector('#in_id')
const res_find = document.querySelector('#res_find')
const btn_find = document.querySelector('#btn_find')

const usuarios = [
    { id: 101, nome: 'Ana', cargo: 'Designer' },
    { id: 102, nome: 'Raí', cargo: 'Desenvolvedor' },
    { id: 103, nome: 'Pedro', cargo: 'Gerente' }
]

btn_find.addEventListener('click', () => {
    const idUsuarios = usuarios.find((val) => {
        return val.id === Number(in_id.value)
    })

    if(idUsuarios){
        res_find.innerHTML = `Nome: ${idUsuarios.nome} <br/> Cargo: ${idUsuarios.cargo}`
    } else {
        res_find.innerHTML = 'Usuario não encontrado.'
    }
})