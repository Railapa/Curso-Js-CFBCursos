// 1. Criamos a função que RETORNA uma Promise
const validarLogin = (usuario) => {
    // Retornamos a New Promise que recebe 'resolve' (sucesso) e 'reject' (falha)
    return new Promise((resolve, reject) => {
        
        console.log("Iniciando validação no servidor...");

        // Simulamos um atraso de 2 segundos (como se fosse a internet lenta)
        setTimeout(() => {
            if (usuario === "admin") {
                // Se o dado estiver correto, chamamos o resolve
                resolve("Acesso Permitido! Bem-vindo, Administrador.");
            } else {
                // Se estiver errado, chamamos o reject
                reject("Erro: Usuário não encontrado.");
            }
        }, 2000);
    });
};

// 2. Chamada da função e tratamento da resposta
console.log("Botão de login clicado.");

validarLogin("admin") // Tente mudar para "raí" para ver o erro no console
    .then((mensagemSucesso) => {
        // O .then só roda se o resolve() lá de cima for chamado
        console.log("SUCESSO: " + mensagemSucesso);
    })
    .catch((mensagemErro) => {
        // O .catch só roda se o reject() lá de cima for chamado
        console.error("FALHA: " + mensagemErro);
    })
    .finally(() => {
        // O .finally roda SEMPRE, independente de dar certo ou errado
        console.log("Processo de login finalizado.");
    });

console.log("O JavaScript continua rodando outras coisas enquanto a Promise espera...");