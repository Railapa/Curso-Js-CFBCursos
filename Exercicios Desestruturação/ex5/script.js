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
// console.log(nome,idade,cidade)

// const nums = [1,2,3,4]
// const [primeiro, segundo] = nums
// console.log(primeiro, segundo)

const{endereco:{cidade: cidadeUsuario, estado: estadoUsuario}} = usuario;
console.log(cidadeUsuario, estadoUsuario)