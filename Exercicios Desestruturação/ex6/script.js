// Dados para o exercício
const pacoteTuristico = {
    destino: "Pelourinho",
    detalhes: {
        hotel: "Pousada do Carmo",
        estrelas: 5
    },
    precos: [1200, 1500, 2000, 2500] // Baixa, Média, Alta e Especial temporada
};

const passageiros = ["Bruno", "Alice", "Carlos", "Daniela", "Eduardo"];
const [p1,,p3] = passageiros
console.log(p1, p3)

const [lider, ...grupo] = passageiros
console.log(lider, passageiros)

const {detalhes:{hotel}} = pacoteTuristico
console.log(hotel)

const {destino: localViagem} = pacoteTuristico
console.log(localViagem)

const resumoPacote = ({destino, precos}) => {
    const [precoBaixa] = precos
    console.log(`Destino: ${destino} - Preço inicial: ${precoBaixa}`)
}
resumoPacote(pacoteTuristico)