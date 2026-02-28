const usuario = {
    nome: '',
    email: '',
    status: 'offline',

    logar: function (pNome, pEmail) {
        this.nome = pNome
        this.email = pEmail
        this.status = 'online'
    },

    exibirStatus: function () {
        return console.log(`${this.nome} (${this.email}) está ${this.status}`)
    }
}

const sessaoA = usuario
const sessaoB = usuario

sessaoA.logar('Raí', 'rai100304@gmail.com')
sessaoB.exibirStatus()