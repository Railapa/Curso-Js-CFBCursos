class Bola {
    // ... (constructor das aulas anteriores)

    // Retorna o índice desta bola dentro do array global
    minhaPos = () => {
        return this.arrayBolas.indexOf(this);
    }

    // Método para deletar a bola por completo
    remover = () => {
        clearInterval(this.controle); // Para o movimento (timer)
        
        // Filtra o array: mantém apenas as bolas que têm ID diferente desta
        bolas = bolas.filter((b) => {
            if (b.id != this.id) return b;
        });

        this.eu.remove(); // Remove a bolinha do HTML (DOM)
        numBolas--; // Diminui o contador
        num_objetos.innerHTML = numBolas; // Atualiza o contador na tela
    }

    // Método que cria a bolinha visualmente no navegador
    desenhar = () => {
        const div = document.createElement("div"); // Cria o elemento
        div.setAttribute("id", this.id); // Define o ID único
        div.setAttribute("class", "bola"); // Define a classe CSS
        
        // Aplica o estilo (Posição, Tamanho e Cor) usando Template Strings
        div.setAttribute("style", `
            left: ${this.px}px; 
            top: ${this.py}px; 
            width: ${this.tam}px; 
            height: ${this.tam}px; 
            background-color: rgb(${this.r},${this.g},${this.b});
        `);

        this.palco.appendChild(div); // Coloca a bolinha dentro do palco
    }
}