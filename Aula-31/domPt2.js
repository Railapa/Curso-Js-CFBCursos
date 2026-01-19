/* 
1. O Método getElementsByTagName
Seleção por Grupo: Ele permite capturar todos os elementos de uma mesma tag (como todas as divs, todos os p ou todos os h1) de uma só vez.
Retorno (HTML Collection): Ao contrário do ID, ele não retorna um elemento direto, mas sim uma HTML Collection (uma coleção de elementos).
O "Problema" da Coleção: Uma HTML Collection parece um Array, mas não é um Array completo. Ela tem tamanho (length), mas não possui métodos modernos como o .map().

2. Transformando em Array (O uso do Spread)
O professor Bruno mostra um "truque" muito importante: como essa coleção não aceita o .map() nativamente, usamos o operador Spread (...) para transformar essa coleção em um Array real.
Sintaxe: const elementos = [...document.getElementsByTagName("div")].
Vantagem: Ao fazer isso, você "espalha" os elementos dentro de um Array e ganha acesso a todos os métodos que já estudamos, como map, filter, push, etc.

Dica para o seu código: Se você quer mudar apenas uma div específica, use o ID. Se você quer mudar o estilo ou o texto de todas as divs da página de uma vez só (como você fez no exercício anterior com o loop), o getElementsByTagName é muito mais rápido e eficiente.
*/


const colecaoHTML = [...document.getElementsByTagName('div')]
for(c of colecaoHTML){
    c.innerHTML='CFB Cursos'
}

console.log(colecaoHTML)