let assinatura = 'Ouro'
switch(assinatura){
    case 'Bronze':
    console.log('5% de Desconto')
    break
    case 'Prata':
    console.log('10% de Desconto')
    break
    case 'Ouro':
    console.log('20% de Desconto') 
    break  
    case 'Platinum':
    case 'Black':
    console.log('30% de Desconto') 
    break
    default:
    console.log('Sem Desconto')
    break
}