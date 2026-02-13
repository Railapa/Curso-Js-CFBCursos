const cores = ["#ffcccc", "#ccffcc", "#ccccff", "#ffffcc"]
const btn = document.querySelector('#btn-proxima-cor')
const msg = document.querySelector('#status-cor')

let it_cores = cores[Symbol.iterator]()

btn.addEventListener('click', () => {
    const mudar_cores = it_cores.next()
    if(mudar_cores.done){
        msg.innerHTML = 'Fim das cores'
        btn.disabled = true
        
    } else {
        document.body.style.backgroundColor = mudar_cores.value
    }
})