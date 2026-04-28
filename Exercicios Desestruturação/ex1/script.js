const dev = {
    nome: 'Raí',
    idade: '22',
    cargo: 'Desenvolvedor Front-End',
    tecnologia: 'JavaScript'
};

const {nome, idade, tecnologia,} = dev

const msg = `O desenvolvedor ${nome} tem ${idade} anos e domina ${tecnologia}.`
document.body.innerHTML = `<h1>${msg}<h1>`