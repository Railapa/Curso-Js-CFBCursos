const usuario = {
  nome: "Raí",
  idade: 20,
  email: "rai@email.com",
  endereco: {
    cidade: "Salvador",
    estado: "BA"
  }
};

// const {nome, idade, endereco:{cidade}} = usuario;
// console.log(nome, idade, cidade)

// const numeros = [1,2,3,4]

// const [n1,n2,n3,n4] = numeros;
// console.log(n1,n2,n3,n4)

const {nome, idade, endereco:{cidade: cidadeUsuario, estado: estadoUsuario}} = usuario;
console.log(nome, idade, cidadeUsuario, estadoUsuario)