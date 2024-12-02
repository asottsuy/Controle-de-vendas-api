const prodController = require('../controllers/prodController');

module.exports = (server) => {
    server.get('/api/produtos', prodController.getProdutos);  // Rota para buscar produtos
    server.post('/produtos', prodController.addProduto);     // Rota para adicionar um produto
    server.del('/produtos/delete/:id', prodController.deleteProduto);  // Rota para deletar um produto
    server.put('/produtos/update/:id_produto', prodController.updateProduto); //Rota para atualizar um produto pelo id
};