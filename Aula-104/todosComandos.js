const registroBruto = {
    dados: "ID:2026_ESTUDANTE:bruno_pinho_campos_CURSO:computacao",
    servidor: "https://provas.unifacs.br",
    config: "seguranca_nivel_5",
    caracteresEspeciais: [67, 70, 66] 
}

console.log(registroBruto.dados.replace(/_/g, ' '))

console.log(registroBruto.dados.split(' '))

console.log(registroBruto.servidor.startsWith('https'))
console.log(registroBruto.servidor.endsWith('br'))

console.log(registroBruto.config.includes('nivel'))

console.log(registroBruto.dados.substring(43))

console.log(registroBruto.dados.substring(43).toUpperCase())

console.log(registroBruto.config.repeat(2))

console.log(registroBruto.dados.valueOf())

let num = 7
num = num.toString()
console.log(typeof(num))

console.log(String.fromCodePoint(67, 70, 66))

console.log(registroBruto.config.search('seguranca'))

console.log(registroBruto.config.replace('seguranca', 'teste'))

console.log(registroBruto.config.localeCompare(registroBruto.servidor))

console.log(registroBruto.servidor.charAt(0)) 

console.log(registroBruto.servidor.charCodeAt(0)) 

console.log(registroBruto.servidor.concat(registroBruto.config))

let nomeCompleto = 'Bruno Pinho Campos'

// Procura a PRIMEIRA vez que a letra 'o' aparece
console.log(nomeCompleto.indexOf('o'))

// Procura a ULTIMA vez que a letra 'o' aparece 
console.log(nomeCompleto.lastIndexOf('o'))

// Se pesquisarb algo que NAO existe, o retorno é sempre -1
console.log(nomeCompleto.lastIndexOf('y'))