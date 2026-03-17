const in_faces = document.querySelector('#in_faces')
const res_dado = document.querySelector('#res_dado')
const btn_lancar = document.querySelector('#btn_lancar')

btn_lancar.addEventListener('click', () => {
    const num = Number(in_faces.value)

    res_dado.innerHTML = Math.floor(Math.random() * num) + 1
})