class Produto {

    constructor() {
        this.id = 1;
        this.arrayProdutos = [];

    }

    salvar() {
        let produto = this.lerDados();

        if(this.validaCampos(produto)) {
            this.adicionar(produto);
        }

        this.listaTabela();
        this.cancelar();

    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for(let i = 0; i < this.arrayProdutos.length; i++ ) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_selecione = tr.insertCell();
            let td_quantidade = tr.insertCell();
            let td_preco = tr.insertCell();
            let td_excluir = tr.insertCell();
            
            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_selecione.innerText = this.arrayProdutos[i].selecione;
            td_quantidade.innerText = this.arrayProdutos[i].quantidade;
            td_preco.innerText = this.arrayProdutos[i].preco;

            td_excluir.classList.add('center');

            let imgDelete = document.createElement('img');
            imgDelete.src = 'Delete.png';
            imgDelete.setAttribute("onclick", "produto.deletar("+this.arrayProdutos[i].id+")");

            td_excluir.appendChild(imgDelete);



        }
    }

    adicionar(produto){
        this.arrayProdutos.push(produto);
        this.id ++;

        alert("Produto inserido com sucesso!");

    }

    lerDados() {

        let produto = {}

        produto.id = this.id;
        produto.nomeProduto = document.getElementById('produto').value;
        produto.selecione = document.getElementById('selecione').value;
        produto.quantidade = document.getElementById('quantidade').value;
        produto.preco = document.getElementById('preco').value;
        
    

        return produto;
    
    }

    validaCampos(produto) {
        let msg = '';

        if(produto.nomeProduto == '') {
            msg += '- Informe o nome do Produto \n';
        }

        if(produto.preco == '') {
            msg += '- Informe a Quantidade do Produto \n';
        }

        if(produto.preco == '') {
            msg += '- Informe a categoria do Produto \n';
        }

        if(produto.preco == '') {
            msg += '- Informe o preço do Produto \n';
        }



        if(msg != '') {
            alert(msg);
            return false
        }

        return true;
    }

   cancelar() {
        document.getElementById('produto').value = '';
        document.getElementById('preco').value = '';
        document.getElementById('quantidade').value = '';
        document.getElementById('selecione').value = '';

    }

    deletar(id) {

        let tbody = document.getElementById('tbody');

        for(let i = 0; i < this.arrayProdutos.length; i++) {
            if(this.arrayProdutos[i].id == id) {
                this.arrayProdutos.splice(i, 1);
                tbody.deleteRow(i);

                alert("Produto Excluído com sucesso!");
            }
        }

    }
}

var produto = new Produto();