const p1_btn = document.querySelector('#p1_btn')
const p1_output = document.querySelector('#p1_output')

const preco = 150
let nomeProduto = 'Mouse Gamer'
nomeProduto = 'Teclado Mecanico'
p1_btn.addEventListener('click', () => p1_output.innerHTML = nomeProduto)


const p2_input = document.querySelector('#p2_input')
const p2_output = document.querySelector('#p2_output')
const p2_btn = document.querySelector('#p2_btn')

const dobro = () => {
    const res = p2_input.value * 2
    p2_output.innerHTML = res
}

p2_btn.addEventListener('click', dobro)

const p3_output = document.querySelector('#p3_output')
const p3_btn = document.querySelector('#p3_btn')
const tecnologias = ["HTML", "CSS", "JavaScript", "React"]

p3_btn.addEventListener('click', () => {
    p3_output.innerHTML = ''
    tecnologias.map((tag) => {
        p3_output.innerHTML += `<span class="tech-tag">${tag}</span>`
    })
})

const p4_output = document.querySelector('#p4_output')
const p4_btn = document.querySelector('#p4_btn')

const infoCurso = { 
    nome: "React Completo", 
    professor: "Matheus Battisti", 
    plataforma: "YouTube" 
};

p4_btn.addEventListener('click', () => {
    const {nome, professor,plataforma} = infoCurso
    p4_output.innerHTML = nome
    p4_output.innerHTML += professor
    p4_output.innerHTML += plataforma
})

const p5_output = document.querySelector('#p5_output')
const p5_btn = document.querySelector('#p5_btn')

const base = ["HTML", "CSS"]

p5_btn.addEventListener('click', () => {
    const tecnologiasFinais = [...base, 'Javascript']
    p5_output.innerHTML = tecnologiasFinais
})

const p6_output = document.querySelector('#p6_output')
const p6_btn = document.querySelector('#p6_btn')

let usuarioAtivo =  false
p6_btn.addEventListener('click', () => {
    usuarioAtivo = !usuarioAtivo

    p6_output.innerHTML = usuarioAtivo == true ? 'Status Ativo' : 'Status Inativo'
})