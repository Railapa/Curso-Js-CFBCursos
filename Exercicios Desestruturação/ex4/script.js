const dadosCidade = {
  nome: "São Paulo",
  temp: 28,
  umid: 65
};

const {temp: temperatura, umid: umidadae} = dadosCidade;
console.log(temperatura, umidadae)

const gerarCoordenadas = () => {
  return [-23.65, -46.12]
}

const [c1, c2] = gerarCoordenadas()
console.log(c1,c2)