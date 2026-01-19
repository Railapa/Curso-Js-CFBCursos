const colecaoCursos = [...document.getElementsByClassName('curso')]
console.log(colecaoCursos.length)

for(c of colecaoCursos){
    c.innerHTML += ` - Online`
}

const cursosC1 = [...document.getElementsByClassName('c1')]

for(c1 of cursosC1){
    c1.style.color = 'green'
}