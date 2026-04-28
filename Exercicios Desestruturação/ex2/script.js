const projetos = [
    {
        nome: 'House Burguer',
        link: 'https://landing-page-house-burguer.vercel.app/',
    },

    {
        nome: 'Agencia Rumo',
        link: 'https://agencia-rumo.vercel.app/'
    },

    {
        nome: 'Starbucks',
        link: 'https://landing-page-starbucks-vert.vercel.app/'
    }
]

projetos.map(({nome, link}) => {
    console.log(`Projeto: ${nome} | Link: ${link}`)
})