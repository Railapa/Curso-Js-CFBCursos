const in_raio = document.querySelector('#in_raio')
const btn_calcular = document.querySelector('#btn_calcular')
const res_area = document.querySelector('#res_area')
const res_volume = document.querySelector('#res_volume')
const res_raiz = document.querySelector('#res_raiz')

btn_calcular.addEventListener('click', () => {
    const raio = Number(in_raio.value)
    res_area.innerHTML = (Math.PI * Math.pow(raio, 2)).toFixed(2) + ' cm²'
    res_volume.innerHTML = ((4/3) * Math.PI * Math.pow(raio, 3)).toFixed(2) + " cm³"
    res_raiz.innerHTML = Math.sqrt(raio).toFixed(2)
})
