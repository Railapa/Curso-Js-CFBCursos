import { contatos } from "./bancoContatos.js";

let contato = {
    getTodosContatos() {
        return contatos
    },

    getContato(i_cont) {
        return contatos[i_cont]
    },

    addContato(novoContato, destinoDOM) {
        const cont = {
            nome: document.querySelector('#f_nome').value,
            telefone: document.querySelector('#f_telefone').value,
            email: document.querySelector('#f_email').value
        }

        contatos.push(cont)
        destinoDOM.innerHTML = ''
        contatos.forEach((c) => {
            const div = document.createElement('div')
            div.setAttribute('class', 'contato')

            const p_nome = document.createElement('p')
            p_nome.innerHTML = c.nome

            const p_telefone = document.createElement('p')
            p_telefone.innerHTML = c.telefone

            const p_email = document.createElement('p')
            p_email.innerHTML = c.email

            const btn_remover = document.createElement('button')
            btn_remover.innerHTML = 'Remover Contato'
            

            btn_remover.addEventListener('click', (evt) => {
               
            })

            div.appendChild(p_nome)
            div.appendChild(p_telefone)
            div.appendChild(p_email)
            div.appendChild(btn_remover)

            destinoDOM.appendChild(div)
        })


    }
}

export default contato