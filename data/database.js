let categorias = [
    {id: 1, nome: "Massas"},
    {id: 2, nome: "Risotos"},
    {id: 3, nome: "Bebidas"},
    {id: 4, nome: "Sobremesas"}
];

let produtos = [
    {
        categoriaId: 1,
        nome: "Ravioli á moda casa",
        descricao: " Ravioli rechedo com queijo nobre e molho caseiro italiano.",
        preco: 79.00,
        imagem: "https://i.pinimg.com/736x/07/65/41/076541633b1a7a6b17b969bbc4241534.jpg"
    },
 {
        categoriaId: 2,
        nome: "Agnolotti",
        descricao: "Massa Recheada de Carne assada com espinafre",
        preco: 65.00,
        imagem: "https://i.pinimg.com/1200x/74/8b/d6/748bd6dd56b74a8d58c335f511508d56.jpg"
    },
  {
        categoriaId: 3,
        nome: "Aperol Spritz",
        descricao: "Laranja brilhante, mistura Aperol, prosecco e água com gás",
        preco: 28.00,
        imagem: "https://i.pinimg.com/736x/71/87/15/71871596c36f8527fd1200408b0b28a3.jpg"
    },
     { categoriaId: 4,
        nome: "Risotto alla Milanese",
        descricao: "O mais famoso, originário de Milão, leva açafrão, caldo de carne e tutano.",
        preco: 75.50,
        imagem: "https://i.pinimg.com/1200x/68/dc/31/68dc31199d9d21be40d49a1e30c4a703.jpg"
    },
    { categoriaId: 5,
        nome: "Cannoli",
        descricao: "Massa frita em formato de tubo, típica de Silícia, recheada com creme de ricota doce",
        preco: 20.00,
        imagem: "https://i.pinimg.com/1200x/73/7b/b6/737bb692acbfa92ca4b4ddf4390fbcb0.jpg"
    },
    { categoriaId: 6,
        nome: "Risotto ai Porri",
        descricao: "Variação fresca e cítrica, típica de Sorrento",
        preco: 90.00,
        imagem: "https://i.pinimg.com/1200x/2f/cc/0a/2fcc0a69a46580509dd9080a8d1d64fb.jpg"
    }

    
];
module.exports = { categorias, produtos };