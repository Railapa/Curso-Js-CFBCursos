const idInterno = Symbol('Registro')

const aluno = {
    nome: 'Raí',
    [idInterno]: 100304
}

for (let chave in aluno) {
    console.log(chave + ": " + aluno[chave]);
}