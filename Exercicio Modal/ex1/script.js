const btn_menu = document.querySelector('.btn_menu')

btn_menu.addEventListener('click', () => {
    const modalID = btn_menu.getAttribute('data-modal')
    const modal = document.getElementById(modalID)

    modal.showModal()
})

const close_modal = document.querySelector('.close_modal')

close_modal.addEventListener('click', () => {
    const modalID = close_modal.getAttribute('data-modal')
    const modal = document.getElementById(modalID)

    modal.close()
})