const express = require('express');
const app = express();
app.use(express.json());

// Arrays de dados
let produtos = [
    { id: 1, nome: 'Ravioli á moda casa', preco: 79.00, categoria: 'Massas' },
    { id: 2, nome: 'Agnolotti', preco: 65.00, categoria: 'Massas' },
    { id: 3, nome: 'Aperol Spritz', preco: 28.00, categoria: 'Bebidas' },
    { id: 4, nome: 'Risotto alla Milanese', preco: 75.50, categoria: 'Risotos' },
    { id: 5, nome: 'Cannoli', preco: 20.00, categoria: 'Sobremesas' },
    { id: 6, nome: 'Risotto ai Porri', preco: 90.00, categoria: 'Risotos' }
];


// --- ROTAS DE PRODUTOS ---

app.get('/produtos', (req, res) => {
    res.json(produtos);
});

// NOVO: Rota para filtrar produtos por nome da categoria
app.get('/produtos/categoria/:nomeCategoia', (req, res) => {
    const { nomeCategoria } = req.params;
    const produtosFiltrados = produtos.filter(
        p => p.categoria.toLowerCase() === nomeCategoria.toLowerCase()
    );
    res.json(produtosFiltrados);
});

app.post('/produtos', (req, res) => {
    const { nome, preco, categoria } = req.body;
    const novoProduto = { id: produtos.length + 1, nome, preco, categoria };
    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
});

app.put('/produtos/:id', (req, res) => {
    const { id } = req.params;
    const { nome, preco, categoria } = req.body;
    const index = produtos.findIndex(p => p.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ mensagem: "Produto não encontrado." });
    }

    produtos[index] = { id: parseInt(id), nome, preco, categoria };
    res.json(produtos[index]);
});

app.delete('/produtos/:id', (req, res) => {
    const { id } = req.params;
    const listaOriginalLength = produtos.length;
    produtos = produtos.filter(p => p.id !== parseInt(id));

    if (produtos.length === listaOriginalLength) {
        return res.status(404).json({ mensagem: "Produto não encontrado para exclusão." });
    }
    res.status(204).send(); 
});

// --- ROTAS DE CATEGORIAS ---

// NOVO: Listar categorias
app.get('/categorias', (req, res) => {
    res.json(categorias);
});

// NOVO: Criar categoria
app.post('/categorias', (req, res) => {
    const { nome } = req.body;
    const novaCategoria = { id: categorias.length + 1, nome };
    categorias.push(novaCategoria);
    res.status(201).json(novaCategoria);
});

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));