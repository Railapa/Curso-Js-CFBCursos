const in_nome = document.querySelector('#in_nome')
const in_num = document.querySelector('#in_num')
const btn_recibo = document.querySelector('#btn_recibo')

btn_recibo.addEventListener('click', () => {
    const win = window.open('', '', 'height=500,width=500')

    win.document.write(`Recebemos de ${in_nome.value} a quantia de ${in_num.value}`)
})