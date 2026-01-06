let n1 = 20
let n2 = 10
let operação = '%'
switch(operação){
    case '+':
    console.log(n1 + n2)
    break
    case '-':
    console.log(n1 - n2)
    break
    case '*':
    console.log(n1 * n2)
    break
    case '/':
    console.log(n1 / n2)
    break
    case '**':
    console.log(n1 ** n2)
    break
    case '%':
    console.log(n1 % n2)
    break
    default:
    console.log('Operção Invalida')
}