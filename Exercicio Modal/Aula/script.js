// Captura todos os botões de abrir
const openButtons = document.querySelectorAll(".open_modal");
// Captura todos os botões de fechar
const closeButtons = document.querySelectorAll(".close_modal");

// Para cada botão de abrir, adiciona o evento de clique
openButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modalId = button.getAttribute("data-modal"); // Pega o ID (ex: "modal-1")
        const modal = document.getElementById(modalId);    // Localiza o <dialog>
        modal.showModal();                                 // Abre o modal nativamente
    });
});

// Para cada botão de fechar, adiciona a lógica de fechar
closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modalId = button.getAttribute("data-modal");
        const modal = document.getElementById(modalId);
        modal.close();                                     // Fecha o modal nativamente
    });
});