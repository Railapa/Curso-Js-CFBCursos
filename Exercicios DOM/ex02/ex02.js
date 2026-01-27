const colecapDivs = document.getElementsByTagName('div')
//console.log(colecapDivs.length)

const arrayDivs = [...colecapDivs]
console.log(arrayDivs)
for(a of arrayDivs){
    a.innerHTML = 'Elemento da Tag Div'
    a.style.color = 'blue'
}