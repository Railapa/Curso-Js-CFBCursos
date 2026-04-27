const btnLike = document.querySelector('#btnLike')
let curtido = false

btnLike.addEventListener('click', () => {
    if (curtido === false) {
        curtido = true
        btnLike.style.backgroundColor = 'blue'
        btnLike.style.color = 'white'
    } else {
        curtido = false
        btnLike.style.backgroundColor = 'rgb(201, 201, 201)'
        btnLike.style.color = 'black'
    }
})