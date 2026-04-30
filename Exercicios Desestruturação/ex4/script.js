const dadosCidade = {
  nome: "São Paulo",
  temp: 28,
  umid: 65
};

const{temp: tempo, umid: umidade} = dadosCidade;
console.log(tempo, umidade)

const gerarCoordenadas = () => {
  return [-23.54, -43.12]
}

const [c1, c2] = gerarCoordenadas()
console.log(c2)