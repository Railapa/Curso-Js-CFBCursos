class Gerenciador{
    static produtos = ['Monitor', 'Mouse', 'Teclado']

    static addItem(item){
        this.produtos.push(item)
    }

    static listarProdutos(){
        return this.produtos
    }
}

export default Gerenciador