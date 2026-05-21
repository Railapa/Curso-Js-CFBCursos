const consultarCepReal = async (numeroCep) => {
    // URL real da internet que devolve dados de CEP
    const url = `https://viacep.com.br/ws/${numeroCep}/json/`;

    try {
        // PASSO 1: Vai na internet buscar o pacote bruto da resposta
        const respostaBruta = await fetch(url);
        
        // PASSO 2: Desembrulha o pacote bruto e transforma em Objeto JS
        const dadosEndereco = await respostaBruta.json();

        // Agora você tem o objeto pronto para usar!
        console.log("Rua:", dadosEndereco.logradouro);
        console.log("Bairro:", dadosEndereco.bairro);
        console.log("Cidade:", dadosEndereco.localidade); // No ViaCEP a chave se chama localidade

    } catch (erro) {
        // Se a internet cair ou o link estiver quebrado, cai aqui
        console.error("Erro na requisição:", erro);
    }
};

// Testando a função com o CEP de Salvador que usamos antes!
consultarCepReal("40000000");