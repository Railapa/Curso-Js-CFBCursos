const semaforo = document.querySelector('#semaforo')
semaforo.style.backgroundColor = 'green'

semaforo.addEventListener('click', (evt) => {
    if(semaforo.style.backgroundColor === 'green'){
        semaforo.style.backgroundColor = 'yellow'
    } else if (semaforo.style.backgroundColor === 'yellow'){
        semaforo.style.backgroundColor = 'red'
    } else {
        semaforo.style.backgroundColor = 'green'
    }
})