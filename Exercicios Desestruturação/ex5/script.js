const usuario = {
  nome: "Raí",
  idade: 20,
  email: "rai@email.com",
  endereco: {
    cidade: "Salvador",
    estado: "BA"
  }
};

const {nome, endereco:{cidade, estado}} = usuario
console.log(nome, cidade, estado)

const numeros = [1,2,3,4]
const [n1,n2,n3,n4] = numeros
console.log(n1,n2,n3,n4)

const {endereco:{cidade: cidadeUsuario, estado: estadoUsuario}} = usuario
console.log(cidadeUsuario, estadoUsuario)