let numeros = [10,20,30,40,50,60,70,80,90]
let [a,b,c,...d] = numeros
console.log(d)

let obj = {nome:'Bruno', canal: 'CFB Cursos'};
let {nome, canal} = obj;
console.log(nome, canal)

const cores = () => {
    return ['verde', 'amarelo', 'azul', 'branco', 'vermelho']
}

const [,c1,c2,,c3] = cores();
console.log(c1,c2,c3)

let texto = 'Curso de Javascript'
let [t1,t2,t3] = texto.split(' ')
console.log(t1)
console.log(t1,t2,t3)